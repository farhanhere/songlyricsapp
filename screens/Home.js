import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import axios from 'axios';

const Home = () => {
  const [search, setSearch] = useState(''); // Search input
  const [lyrics, setLyrics] = useState('');
  const [artistName, setArtistName] = useState('');
  const [releasedYear, setReleasedYear] = useState('');
  const [thumbnailUrl, setThumbnailUrl] = useState('');

  const onChangeSearch = (text) => {
    setSearch(text);
    setLyrics('Search song for lyrics'); // Clear the lyrics when search input changes
    setArtistName(''); // Clear the artist name when search input changes
    setReleasedYear(''); // Clear the released year when search input changes
    setThumbnailUrl(''); // Clear the thumbnail URL when search input changes
  };

  const fetchData = async () => {
    const options = {
      method: 'GET',
      url: 'https://genius-song-lyrics1.p.rapidapi.com/search/',
      params: {
        q: search,
        per_page: '10',
        page: '1'
      },
      headers: {
        'X-RapidAPI-Key': 'b9e7832377msh9280238b0a0b5dfp1fb4c9jsn32cc54ef3f4a',
        'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      const firstResult = response.data.hits[0].result;
      const songId = firstResult.id;
      const artist = firstResult.primary_artist.name;
      setArtistName(artist); // Set the artist name in the state
      const lyricsOptions = {
        method: 'GET',
        url: 'https://genius-song-lyrics1.p.rapidapi.com/song/lyrics/',
        params: { id: songId },
        headers: {
          'X-RapidAPI-Key': 'b9e7832377msh9280238b0a0b5dfp1fb4c9jsn32cc54ef3f4a',
          'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com',
        },
      };
      const lyricsResponse = await axios.request(lyricsOptions);
      const lyricsData = lyricsResponse.data;
      const songLyrics = lyricsData.lyrics.lyrics.body.html;
      const formattedLyrics = songLyrics.replace(/<(?:.|\n)*?>/gm, ''); // Remove HTML tags
      setLyrics(formattedLyrics);

      const thumbnail = firstResult.song_art_image_thumbnail_url;
      setThumbnailUrl(thumbnail);

      const releasedYear = firstResult.release_date_for_display;
      setReleasedYear(releasedYear);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.txt1}>Welcome!</Text>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder={'Search a song'}
          style={styles.input}
          onChangeText={onChangeSearch}
        />
        <TouchableOpacity onPress={fetchData} style={styles.btn}>
          <Text style={styles.btnText}>Search</Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.lyricsContainer}>
        {thumbnailUrl !== '' && <Image source={{ uri: thumbnailUrl }} style={styles.thumbnail} />}
        {artistName !== '' && <Text style={styles.artistName}>Written By: {artistName}</Text>}
        {releasedYear !== '' && <Text style={styles.releasedYear}>Released Date: {releasedYear}</Text>}
        <Text style={styles.lyricsText}>{lyrics}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 270,
    height: 40,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 10,
    fontSize: 14,
    margin:3
  },
  txt1: {
    fontSize: 40,
    color: '#fff',
    fontWeight: 'bold',
  },

  btn: {
    backgroundColor: '#E31C79',
    height: 40,
    padding: 9,
    margin: 5,
    borderRadius: 10,
  },
  btnText: {
    color: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lyricsContainer: {
    margin: 10,
    flexGrow: 1,
  },
  lyricsText: {
    fontSize: 18,
    color: '#fff',
    marginTop: 10,
  },
  artistName: {
    fontSize: 24,
    color: '#fff',
    marginTop: 10,
    textAlign: 'center',
  },
  releasedYear: {
    fontSize: 18,
    color: '#E31C79',
    marginBottom: 10,
    textAlign: 'center',
  },
  thumbnail: {
    width: 330,
    height: 250,
    borderRadius: 10,
    marginBottom: 10,
    borderColor: '#fff',
    borderWidth: 0.5,
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

export { Home };