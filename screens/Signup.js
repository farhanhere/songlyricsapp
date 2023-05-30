import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import { auth } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInAnonymously, onAuthStateChanged } from "firebase/auth";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { CheckBox } from 'react-native-elements';


const Signup = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword,setShowPassword]=useState(false);
  const [showConfirmPassword,setShowConfirmPassword]=useState(false);


  const [isChecked, setIsChecked] = useState(false);
  const handleSignup = async () => {
    console.log('LOGGED');
    if (!email || !name || !password || !confirmPassword) {
      Alert.alert('All fields are required');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Password should match');
      return;
    }
    if (!isChecked) {
      Alert.alert('Please accept the Terms of Use & Privacy Policy');
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("Successful");
      const user = userCredential.user;
      console.log("User data,", user);
  
      Alert.alert(
        'Registered Successfully, Please Login',
        '',
        [
          {text: 'OK', onPress: () => navigation.navigate('Login')}
        ]
      );
      setEmail('');
    setName('');
    setPassword('');
    setConfirmPassword('');
    setIsChecked(false);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('Error Code == ', errorCode)
      console.log('Error Message == ', errorMessage)
      Alert.alert('Registration Failed', errorMessage);
    }
  };
  
  const goToLogin = () => {
    navigation.navigate('Login');
  };


  return (
   

    <View style={styles.container}>

      <Text style={styles.textemail}>Email</Text>
      <View style={styles.textbox}>
        <TextInput placeholder='Email' value={email} onChangeText={setEmail}></TextInput>
       </View>
       <Text style={styles.text}>Name</Text>
       <View style={styles.textbox}>
        <TextInput placeholder='Name'  value={name} onChangeText={setName}></TextInput>
       </View>
       <Text style={styles.text}>Password</Text>
       <View style={styles.textbox}>
        <TextInput style={styles.textinput} secureTextEntry={!showPassword} placeholder='Create Password'  value={password} onChangeText={setPassword}></TextInput>
        <TouchableOpacity onPress={()=> setShowPassword(!showPassword)}>
        <AntDesign name={showPassword ? "eye": "eyeo"} style={styles.iconeye}></AntDesign>
        </TouchableOpacity>
       </View>
       <Text style={styles.text}>Confirm Password</Text>
       <View style={styles.textbox}>
        <TextInput style={styles.textinput} secureTextEntry={!showConfirmPassword} placeholder='Confirm Password' value={confirmPassword} onChangeText={setConfirmPassword}></TextInput>
        <TouchableOpacity onPress={()=> setShowConfirmPassword(!showConfirmPassword)}>
        <AntDesign name={showConfirmPassword ? "eye": "eyeo"} style={styles.iconeye1}></AntDesign>
        </TouchableOpacity>
       </View>
       <View>
       <View style={styles.CheckBox}>
      <CheckBox checked={isChecked} onPress={() => setIsChecked(!isChecked)}/>
      <Text style={styles.termstext}>I accept the Terms of Use & Privacy Policy</Text>
      </View>
      <TouchableOpacity style={styles.Login} onPress={handleSignup}>
        <View style={styles.Loginbutton}><Text style={styles.Logintext}>Create Account</Text></View>
       </TouchableOpacity>

       <TouchableOpacity onPress={goToLogin}><View><Text style={styles.text3}>Already have an Account? Login</Text></View></TouchableOpacity>
      
    </View>


      </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    //alignItems: 'center'
    //justifyContent: 'center',
  },
  textbox:{
    flexDirection: 'row',
    alignItems: 'center',
    width: 330,
    height: 50,
    backgroundColor: "#F5F5F5",
    marginLeft: 30,
    marginTop: 10,
    paddingLeft: 10,
    borderRadius: 10
  },
  text:{
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 30,
    color: 'white'

  },
  CheckBox: {
    flexDirection: 'row',
    marginTop: 10,
    paddingLeft:10,
 
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
      marginLeft: 50,
      marginTop: 20,
  },
  Logintext:{
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold'
  },
  text3:{
    marginTop: 37,
    marginLeft: 100,
    color: 'grey'

  },
  termstext: {
    fontWeight: '600',
    marginTop: 18,
    paddingLeft: -9,
    color: 'white'
  },
  iconeye:{
    color: 'black',
    padding: 10,
    fontSize: 25,
    marginLeft: 160
  },
  iconeye1:{
    color: 'black',
    padding: 10,
    fontSize: 25,
    marginLeft: 150
  },
  textinput: {
    flex: 1,
    //paddingLeft: ,
    fontSize: 14
  },
  textemail:{
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: '22%',
    marginLeft: 30,
    color: 'white'
  }

});

export {Signup};