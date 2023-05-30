//import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

import bg from '../assets/bg.png';


const Start=({navigation})=>{

    const goToLogin = () => {
        navigation.navigate('Login');
      };
      const goToSignup = () => {
        navigation.navigate('Signup');
      };

      
  return (
    <View style={styles.container}>

    <ImageBackground source={bg} style={styles.bg}>

     <View style={styles.background}>
      <View style={styles.textview}>
      <Text style={styles.text1}>Welcome to Song Lyrics App</Text>
      </View>
    {/* <View style={styles.imageview}> 
    <Image source={logo} style={styles.Image} />
    </View>    */}
      <TouchableOpacity style={styles.Login} onPress={goToLogin}>
        <View style={styles.Loginbutton}><Text style={styles.Logintext}>Login</Text></View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.Signup} onPress={goToSignup}>
        <View style={styles.Signupbutton}><Text style={styles.Signuptext}>Sign up</Text></View>
      </TouchableOpacity>
      </View>

    </ImageBackground>
    
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  bg:{
    flex: 1,
    height: '100%',
    width: '100%',

  },
  Image:{
    width: '45%',
    height: '40%', 
    marginTop: '22%', 
    
    
  },
  imageview:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  text1:{
    fontSize: 23,
    marginTop: '18%',
    color: 'white',
    
},
textview:{
 
  alignItems: 'center'
},
Loginbutton:{
  
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#E31C79',
  borderRadius: 8,
  height: 40
  
},
Login:{
    width: 300,
    marginLeft: 50,
    marginTop: '120%',
    //borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8
},
Logintext:{
  fontSize: 19,
  color: 'white'
},
Signupbutton:{
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#E31C79',
  borderRadius: 8,
  height: 40,
  
  
},
Signup:{
    width: 300,
    marginLeft: 50,
    marginTop: 10,
    //borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8
},
Signuptext:{
  fontSize: 19,
  color: 'white'
},
background:{
  // ...StyleSheet.absoluteFillObject,
  //   backgroundColor: 'rgba(0, 0, 0, 0.5)'
}
});
 export{Start};