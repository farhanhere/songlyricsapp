import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity,Image, Alert, ImageBackground } from 'react-native';
import { useState, useEffect } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign'
import bg from '../assets/bg.png'
import {auth} from "./firebase";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signInAnonymously, onAuthStateChanged } from "firebase/auth";

const Login = ({navigation}) => {

  const[showPassword,setShowPassword]=useState(false);
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');


  const handleLogin= async()=>{
    console.log('Handle login');
    
    try{  
      console.log('try'); 
      const userCredential=await signInWithEmailAndPassword(auth,email,password);
      const user= userCredential.user;
      global.userID = user.uid
      console.log('user');
      navigation.navigate('Home');
      console.log('home');
      setEmail('');
      setPassword('');

      Alert.alert(
        'Login Successfully',
        '',
        [
          {text: 'OK', onPress: () => navigation.navigate('Home')}
        ]
      );
    }
    catch(error){
      const errorCode= error.code;
      const errorMessage=error.message;
      console.log('Error', errorMessage);
      
    }
  }
  
  const goToSignup = () => {
    navigation.navigate('Signup');
  };

  const goToHome = () => {
    navigation.navigate('Home');
  };

  return (

    <View style={styles.container}>

       <View style={styles.email}>
        <AntDesign name='mail' style={styles.icon}></AntDesign>
        <TextInput placeholder='Email'  value={email} onChangeText={setEmail}></TextInput>
       </View>
       <View style={styles.password}>
        <AntDesign name='lock' style={styles.icon}></AntDesign>
        <TextInput style={styles.textinput} secureTextEntry={!showPassword} placeholder='Password' value={password} onChangeText={setPassword}></TextInput>
        
        <TouchableOpacity onPress={()=> setShowPassword(!showPassword)}>
        <AntDesign name={showPassword ? "eye": "eyeo"} style={styles.iconeye}></AntDesign>
        </TouchableOpacity>
       </View>
       <TouchableOpacity style={styles.forget}><Text style={styles.text1}>Forgot password?</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.Login} onPress={handleLogin}>
        <View style={styles.Loginbutton}><Text style={styles.Logintext}>Login</Text></View>
       </TouchableOpacity>

       <TouchableOpacity onPress={goToSignup} ><View><Text style={styles.text3}>Create Account</Text></View></TouchableOpacity>

      </View>

     


  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bg:{
    flex: 1,
    height: '100%',
    width: '100%',

  },
  background:{
    ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  email:{
    flexDirection: 'row',
    alignItems: 'center',
    width: 330,
    height: 50,
    backgroundColor: "#F5f5f5",
    //marginLeft: 40,
    marginTop: '20%',
    paddingLeft: 10,
    borderRadius: 10,
    alignContent: 'center'
  },
  icon:{
    color: 'black',
    paddingRight: 15,
    fontSize: 20,
    marginLeft: 5,
  },
  password:{
    flexDirection: 'row',
    alignItems: 'center',
    width: 330,
    height: 50,
    backgroundColor: "#F5F5F5",
    //marginLeft: 40,
    marginTop: 30,
    paddingLeft: 10,
    borderRadius: 10
  },
  iconeye:{
    color: 'black',
    padding: 10,
    fontSize: 25,
    marginLeft: 5,
    //marginTop: -22
  },
  forget:{
    marginTop: 20,
    alignItems: 'center'
    //marginLeft: 50
  },
  text1:{
     fontWeight: 'bold',
     color: 'grey',
     fontSize: 13

  },
  Loginbutton:{
  
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E31C79',
    borderRadius: 8,
    height: 44
    
  },
  Login:{
      width: 300,
      //marginLeft: 50,
      marginTop: 25,
  },
  Logintext:{
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold'
  },
  text2:{
    marginTop: 14,
    marginLeft: 160,
    color: 'grey'
  },
  text3:{
    marginTop: '20%',
    //marginLeft: 100,
    color: 'grey',
    alignItems: 'center'
  },
  textinput: {
    flex: 1,
    fontSize: 14,
    //color: 'black'
  },
  
 

});

export {Login};