import React from 'react'
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';

const Likes=()=> {
    return (
        <View style={styles.container}>
      <Text style={{color:'white'}}>Likes!</Text>
        </View>
      );
  }
  
  const styles = StyleSheet.create({
    container: {flex: 1, 
      justifyContent: 'center',
       alignItems: 'center',
        backgroundColor: 'black'
    },
    
  });
  

export  {Likes};
