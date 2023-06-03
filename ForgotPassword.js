import React, { useState } from 'react';
import { View, Text, TextInput,Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// import { useNavigation } from "@react-navigation/native";

// const navigation = useNavigation();
const ForgotPassword = ({navigation}) => {
  const [pass, setpass] = useState('');
  const [retypepass, setretypepass] = useState('');

  const ForgetPass = () => {
    Alert.alert('Fotgot Password', 'Password changed successfully!');
    setpass('');
    setretypepass('');
  };

  const handleLogin = () => {
     navigation.navigate('Login')
  };
 
  return (
    <View style={styles.container}>
       
        <Image source={require('./assets/leaves.png')} style={styles.image} />
        <View style={styles.con2}>
      <View style={styles.img}>
        <Image source={require('./assets/logo.png')} style={styles.img2} />
      </View>

      <View style={styles.labelContainer}>
        <View style={styles.lc}>
            {/* <TouchableOpacity onPress={handleLogin} style={styles.container}>
              <Icon name="arrow-back" size={24} color="black" />
            </TouchableOpacity> */}
           <Text style={styles.traveco}>Traveco</Text>
        </View>
        
        <Text style={styles.wel}>Forgot Password</Text>
      </View>
      
    
      <View style={styles.inputContainer}>
          <Icon name="eyeo" size={24} color="black" />
        <TextInput
          style={styles.input}
          placeholder="Enter New Password"
          secureTextEntry
          onChangeText={text => setpass(text)}
          value={pass}
        />
        </View>
        <View style={styles.inputContainer}>
          <Icon name="eyeo" size={24} color="black" />
        <TextInput
          style={styles.input}
          placeholder="Retype Password"
          secureTextEntry
          onChangeText={text => setretypepass(text)}
          value={retypepass}
        />
      </View>


      
      <TouchableOpacity style={styles.button} onPress={ForgetPass}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
    {/* <NavBar/> */}
    </View> 
    

  );
};


// const Login = () => {
//   return (
//     <NavigationContainer>
//     <Stack.Navigator>
//       <Stack.Screen name="Login" component={LoginScreen} />
//       <Stack.Screen name="Forgot Password" component={ForgotPassword} />
  
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
  lc:{
    flexDirection:"row",
    justifyContent:"space-between"
  },
  con2:{
marginTop:150
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
    marginBottom:30
  },
  fp:{
    alignSelf:"flex-end"
  },
  fpbut:{
color:"green"
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
    height: 420,
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
    marginBottom: 30,
    flexDirection:"row",
    justifyContent:"space-between",
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
    backgroundColor: '#0D986A',
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

export default ForgotPassword;
