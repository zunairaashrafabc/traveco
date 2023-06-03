import React, { useState } from 'react';
import { View, Text, TextInput,Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import NavBar from './NavBar';

const Stack = createStackNavigator();
const MorePlaces = ({navigation}) => {
const handleHotel = () => {
    navigation.navigate('Hotel')
    };
const handleNewImgPress = () => {
navigation.navigate('MorePlaces')
};
const handleTour = () => {
    navigation.navigate('Tour')
    };
  return (
    <View style={styles.container}>
        <View style={styles.cont2}>
          <View style={styles.imglogo}>
            <Image source={require('./assets/logo.png')} style={styles.img2} />
          </View>

          <View style={styles.img}>
            <Image source={require('./assets/bar.png')} style={styles.imgg} />
            <Text style={styles.traveco}>Traveco</Text>
            <Image source={require('./assets/notf.png')} style={styles.imgg1} />
         </View> 

         <View style={styles.todos}>
            <Text style={styles.todo}>What to Do in Paris?</Text>
            <Text style={styles.popul}>Popularity</Text>
        </View>


        <View style={styles.new}>
        <TouchableOpacity onPress={handleNewImgPress}>
            <Image
              style={styles.pic1}
              resizeMode="cover"
              source={require("./assets/paris.png")}
            />
        </TouchableOpacity>
        <View style={styles.inNew}>
            <View style={styles.New}>
                <TouchableOpacity onPress={handleNewImgPress}>
                <Text style={styles.nt}>Eiffel Tower</Text>
                </TouchableOpacity>
            <View style={styles.starView}>
                <Image source={require('./assets/star.png')} style={styles.star} />
                < Image source={require('./assets/star.png')} style={styles.star} />
                <Image source={require('./assets/star.png')} style={styles.star} />
                <Image source={require('./assets/star.png')} style={styles.star} />
            </View>
            </View>
            <TouchableOpacity onPress={handleNewImgPress}>
             <Text style={styles.dollar}>Starting from $480</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button1} onPress={handleTour}>
             <Text style={styles.buttonText1}>Tour Eiffel Tower</Text>
            </TouchableOpacity>
        </View>
        </View>
        <View style={styles.info}>
            <Text style={styles.infotext}>Make the most of your visit to one of
             the world’s most popular landmarks
              on a guided Eiffel Tower tour. The
               ascent of the Eiffel Tower is a must to
                enjoy the magnificent view of Paris.
            </Text>
        </View>
        <View style={styles.new}>
        <TouchableOpacity onPress={handleNewImgPress}>
            <Image
              style={styles.pic1}
              resizeMode="cover"
              source={require("./assets/museum.png")}
            />
        </TouchableOpacity>
        <View style={styles.inNew}>
            <View style={styles.New}>
                <TouchableOpacity style={styles.bt} onPress={handleNewImgPress}>
                <Text style={styles.nt}>Louvre museum</Text>
                </TouchableOpacity>
            <View style={styles.starView}>
                <Image source={require('./assets/star.png')} style={styles.star} />
                < Image source={require('./assets/star.png')} style={styles.star} />
                <Image source={require('./assets/star.png')} style={styles.star} />
                <Image source={require('./assets/star.png')} style={styles.star} />
            </View>
            </View>
            <TouchableOpacity onPress={handleNewImgPress}>
             <Text style={styles.dollar}>Starting from $500</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button1} onPress={handleTour}>
             <Text style={styles.buttonText1}>Tour Louvre Museum</Text>
            </TouchableOpacity>
        </View>
        </View>
        <View style={styles.info}>
            <Text style={styles.infotext}>The Louvre is the most visited art
             museum in the world. Located in
              the heart of Paris, this historic
               building is a former royal palace.
               </Text>
        </View>
        
      
    
        <View style={styles.labelCont}>
        <TouchableOpacity style={styles.button} onPress={handleHotel}>
            <Text style={styles.buttonText}>Choose Hotel</Text>
           
        </TouchableOpacity>
      </View>
      <NavBar/>
     
      </View>
    </View> 
    

  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#f2f2f2',
  },
  New:{
    flexDirection:"row",
    justifyContent:"space-around",
    marginLeft:30,

  },
  info:{
    marginTop:10,
    paddingHorizontal: 20,
  },
  infotext:{
    color:'black',
    fontSize:18,
    fontFamily:"Regular",
    fontWeight:"500"
  },
  todos: {
    marginTop:10,
    flexDirection: 'column',
   justifyContent:"flex-start",
   paddingHorizontal:20
  },
  todo:{
    color:'black',
    fontWeight:"800",
    fontSize:20
  },
  inNew:{
    marginTop:10,
    flexDirection:'column',
    justifyContent:'flex-start'
  },
  img: {
    flexDirection:'row',
    justifyContent:"space-around",
    marginBottom: 0,
    marginTop:20
  },
  starView:{
    flexDirection:'row',
    justifyContent:"space-around"
  },
  star:{
    top:22,
    left:-10,
    width:13,
    height:13
  },
  new:{
    marginTop:-20,
    flexDirection:'row',
    justifyContent:"space-around"
  },
  nt:{
    left:-20,
    top:20,
    color:'black',
    fontSize:15,
    fontWeight:"800"

  },
  one: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dollar:{
    left:-20,
    top:20,
    color:'grey',
    fontSize:15,
    fontWeight:"400",
    marginLeft:30

  },
  cont2:{
marginTop:170
  },
  labelContainer: {
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
  pic1:{
    top:30,
    width:107,
    height:100
  },
  pics:{
    top:30,
    width:20,
    height:50
  },
  wel:{
    color:"black",
    fontSize: 30,
    fontWeight: "600",
    fontFamily: "poppinsSemibold",
    textAlign: "left",
    textTransform: "capitalize",

  },
  pic2:{
    width:37

  },
  image: {
    marginTop:-100,
    width: 460,
    height: 410,
    left: -57,
    top: -50,
    marginBottom:50,
    borderWidth: 1,
    position: "absolute",
    alignSelf:"center",
    borderRadius:20,
  },
  
  imglogo: {
    alignItems:"center",
    marginBottom: 0,
    marginTop:-130
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
    marginTop:20,
    backgroundColor: '#0D986A',
    alignItems: 'center',
    paddingVertical: 16,
    borderRadius: 25,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  button1: {
    marginTop:30,
    backgroundColor: '#0D986A',
    alignItems: 'center',
    paddingVertical: 18,
    borderRadius: 30,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  labelCont: {
    justifyContent:"center",
    marginTop:-10
  },
  buttonText1: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
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
});

export default MorePlaces;
