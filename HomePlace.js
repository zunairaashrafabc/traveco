import React, { useState } from 'react';
import { View, Text, TextInput,Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ForgotPassword from './ForgotPassword';
import NavBar from './NavBar';


const HomePlace = ({navigation}) => {
  const [location, setlocation] = useState('');
  const handleImagePress = (imageIndex) => {
    // Handle the press event for the images
    // console.log('Image pressed:', imageIndex);
    // Perform any additional actions you need when an image is pressed
  };
  

  return (
    <View style={styles.container}>
     
      
      <View style={styles.img}>
        <Image source={require('./assets/logo.png')} style={styles.img2} />
      </View>

      <View style={styles.img}>
        <Image source={require('./assets/bar.png')} style={styles.imgg} />
        <Text style={styles.traveco}>Traveco</Text>
        <Image source={require('./assets/notf.png')} style={styles.imgg1} />
      </View>

      
      <View style={styles.labelContainer}>
        <Text style={styles.label1}>Hey Zunaira</Text>
        <Text style={styles.label}>Where to?</Text>
      </View>
     <View style={styles.backimg}>
      <Image
            style={styles.water}
            resizeMode="cover"
            source={require("./assets/water.png")}
          />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter location"
          onChangeText={text => setlocation(text)}
          value={location}
        />
        </View>
      <View style={styles.text}>
          <Text style={styles.white1}>Trending</Text>
          <Text style={styles.white}>
            Island in Bali supporting 
            green campaign
          </Text>
          
          <Text style={styles.rs}>
            $89.95 USD - Estimated
          </Text>
          
        </View>
        <Text style={styles.wel1}>
            Trending Green Venues
          </Text>
        <View style={styles.pics}>
        <TouchableOpacity onPress={handleImagePress}>
            <Image
              style={styles.pic1}
              resizeMode="cover"
              source={require("./assets/first.png")}
            />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleImagePress}>
            <Image
              style={styles.pic2}
              resizeMode="cover"
              source={require("./assets/sec.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleImagePress}>
            <Image
              style={styles.pic3}
              resizeMode="cover"
              source={require("./assets/trd.png")}
            />
          </TouchableOpacity>
          </View>
          <View style={styles.Text}>
             <Text style={styles.text1}>
              Kashmir
             </Text>
             <Text style={styles.text1}>
              Amazon
             </Text>
             <Text style={styles.text1}>
              Spain
             </Text>
          </View>
        
        </View>
       <NavBar/>
    </View> 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // paddingHorizontal: 20,
    backgroundColor: '#f2f2f2',
  },
  icons:{
    alignSelf:"center",
    marginTop:27,
    width:381,
    height:72,
    flexDirection:'row',
    justifyContent:"space-evenly",
    alignItems:"center",
    backgroundColor:'white',
    borderRadius:40
  },
  Text:{
    marginHorizontal:5,
    marginRight:-5,
    marginTop:7,
    paddingHorizontal:5,
    flexDirection:"row",
    justifyContent:"space-between"
  },
  text1:{
    color:"black",
    fontSize:16,
    fontWeight:"800",
    fontFamily:"calibari",
  },
  text2:{
    color:"black",
    fontSize:16,
    fontWeight:"800",
    fontFamily:"calibari",
  },
  text3:{
    color:"black",
    fontSize:16,
    fontWeight:"800",
    fontFamily:"calibari",
  },
 water:{
  width:340,
  height:285,
  alignSelf:"center",
  position: "absolute"
 },
  imag:{
    height: 250,
    width: 355,
    position: "absolute",
  },
  
  pic1:{
    height: 150,
    width: 150,
    marginLeft:5
  },
  pic2:{
    height: 150,
    width: 150,
    marginLeft:8,
    marginRight:8
  },
  pic3:{
    height: 150,
    width: 150,
  },
  icon:{
    height: 42,
    width: 44,
  },
  labelContainer: {
    flexDirection: 'column',
    marginBottom: 0,
    justifyContent:"flex-start",
  },
  traveco:{
    color:"#98C13F",
    fontSize:24,
    fontWeight:"bold",
    fontFamily:"calibari",
    alignSelf:"center"
  },
 
  wel:{
    color:"black",
    fontSize: 30,
    fontWeight: "600",
    fontFamily: "normal",
    textAlign: "left",
    textTransform: "capitalize",
    
  },
  wel1:{
    color:"black",
    fontSize: 20,
    fontWeight: "800",
    fontFamily:"Poppins",
    textAlign: "left",
    marginTop:25,
    textTransform: "capitalize",
    marginLeft:10
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
 pics:{
  marginTop:20,
  flexDirection:'row',
  justifyContent:"space-between"
  
 } ,
  img: {
    flexDirection:'row',
    justifyContent:"space-around",
    marginBottom: 0,
    marginTop:10
  },
  img2: {
    width: 33,
    height: 28,
  },
  imgg: {
    marginLeft:10,
    width: 20,
    height: 25,
  },
  imgg1: {
    width: 20,
    height: 25,
  },
  label1: {
    color:"black",
    fontSize: 21,
    marginTop: 10,
    fontWeight:300,
    fontFamily:"SemiBold",
    paddingHorizontal:20
  },
  label: {
    color:"black",
    fontSize: 24,
    marginBottom: 5,
    fontWeight:900,
    paddingHorizontal:20
  },
  inputContainer: {
    marginTop:20,
    marginBottom: 20,
    height:50,
    paddingHorizontal: 20,
  },
  text:{
    marginTop:90,
    paddingHorizontal: 20,
  },
  white:{
    color:'white',
    fontSize:16,
    fontWeight:500,
    marginRight:50
  },
  white1:{
    color:'white',
    fontSize:16,
    fontWeight:500,
    marginRight:50
  },
 
  rs:{
    color:'white',
    fontSize:18,
    fontWeight:700,
    fontFamily:"Poppins"
  },   
  input: {
    height: 60,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 30,
    marginBottom: 10,
    backgroundColor:"white"
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

export default HomePlace;
