import React, { useState } from 'react';
import { View, Text, TextInput,Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ForgotPassword from './ForgotPassword';
import Home from './HomePlace';
// import NavBar from './NavBar';
// import { useNavigation } from "@react-navigation/native";

// const navigation = useNavigation();
const Stack = createStackNavigator();
const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
    Alert.alert('Login', 'Logged in successfully!');
    setUsername('');
    setPassword('');
    navigation.navigate('Home')
  };
  const handleForgotPassword = () => {
    navigation.navigate(()=>'ForgotPassword');
  };
  return (
    <View style={styles.container}>
     
        <Image source={require('./assets/leaves.png')} style={styles.image} />
        <View style={styles.con2}>
      <View style={styles.img}>
        <Image source={require('./assets/logo.png')} style={styles.img2} />
      </View>

      <View style={styles.labelContainer}>
        <Text style={styles.traveco}>Traveco</Text>
        <Text style={styles.wel}>Welcome back</Text>
        <Text style={styles.label}>Login to your account</Text>
      </View>
      
    
      <View style={styles.inputContainer}>
        
      <Text style={styles.uname}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your username"
          onChangeText={text => setUsername(text)}
          value={username}
        />
        </View>
        <View style={styles.inputContainer}>
        <Text style={styles.pass}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry
          onChangeText={text => setPassword(text)}
          value={password}
        />
      </View>
      <View style={styles.fp}>
        <TouchableOpacity style={styles.fgp} onPress={handleForgotPassword}>
        <Text style={styles.fpbut}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.noacc}>
        <Text style={styles.noaccount}>Don't have an account? </Text>
        <TouchableOpacity style={styles.si} onPress={ForgotPassword}></TouchableOpacity>
        <Text style={styles.sitext}>Sign up</Text>
      </View>
    </View>
    {/* <NavBar/> */}
    </View> 
    

  );
};


// const Container = () => {
//   return (
//     <NavigationContainer>
//     <Stack.Navigator>
//       <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
//       <Stack.Screen name="Forgot Password" component={ForgotPassword} options={{ headerShown: false }} />
//       <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
//       {/* <Stack.Screen name="Nav Bar" component={NavBar} options={{ headerShown: false }}/> */}
//     </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f2f2f2',
  },
  con2:{
marginTop:190
  },
  labelContainer: {
    flexDirection: 'column',
    marginBottom: 0,
    justifyContent:"center",
    alignItems:"center",
  },
  traveco:{
    color:"#98C13F",
    fontSize:24,
    fontWeight:"bold",
    fontFamily:"calibari"
  },
  noacc:{
    justifyContent:"center",
    marginTop:20,
    marginBottom:10,
    flexDirection:"row"
  },
  noaccount:{
    color:"grey",
    flexDirection:"row"
  },
  sitext:{
    color:"green"
  },
  wel:{
    color:"black",
    fontSize: 30,
    fontWeight: "600",
    fontFamily: "poppinsSemibold",
    textAlign: "left",
    textTransform: "capitalize",

  },
  fp:{
    alignSelf:"flex-end"
  },
  fpbut:{
color:"green",
marginTop:5
  },
 uname:{
  marginLeft:10
 },
 pass:{
  marginLeft:10,
  marginTop:15

 },
  image: {
    marginTop:-100,
    width: 460,
    height: 410,
    left: -57,
    top: -50,
    marginBottom:10,
    position: "absolute",
    alignSelf:"center",
    borderRadius:350
    
  },
  
  img: {
    alignItems:"center",
    marginBottom: 0,
    marginTop:25
  },
  img2: {
    width: 33,
    height: 28,
  },
  label: {
    color:"black",
    fontSize: 16,
    marginBottom: 5,
  },
  inputContainer: {
    marginBottom: 20,
    height:50
  },
  input: {
    height: 60,
    borderColor: '#ccc',
    borderWidth: 1,
    borderBottomColor:"green",
    borderRadius: 20,
    paddingHorizontal: 10,
    marginBottom: 10,
    flexDirection:"column",
    backgroundColor:"lightgrey"
  },
  input1: {
    height: 60,
    borderColor: '#ccc',
    borderWidth: 1,
    borderBottomColor:"green",
    borderRadius: 20,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor:"lightgrey"
  },
  fgp:{
    marginTop:20,
    marginBottom:10,   
      },
  button: {
    marginTop:30,
    backgroundColor: 'green',
    alignItems: 'center',
    paddingVertical: 18,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Login;
