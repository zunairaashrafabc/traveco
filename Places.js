import React, { useState } from 'react';
import { View, Text, TextInput,Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import NavBar from './NavBar';

const Stack = createStackNavigator();
const Places = ({navigation}) => {
const handleMorePlaces = () => {
    navigation.navigate('MorePlaces')
    };
const handleNewImgPress = () => {
navigation.navigate('MorePlaces')
};
const handleTour = () => {
    navigation.navigate('Tour')
    };
  return (
    <View style={styles.container}>
     
        <Image source={require('./assets/map.png')} style={styles.image} />
        <View style={styles.cont2}>
          <View style={styles.img}>
            <Image source={require('./assets/logo.png')} style={styles.img2} />
          </View>

        <View style={styles.labelContainer}>
            <Text style={styles.traveco}>Traveco</Text>
        </View>

        <View style={styles.new}>
        <TouchableOpacity onPress={handleNewImgPress}>
            <Image
              style={styles.pic1}
              resizeMode="cover"
              source={require("./assets/plc1.png")}
            />
        </TouchableOpacity>
        <View style={styles.inNew}>
            <View style={styles.New}>
                <TouchableOpacity onPress={handleNewImgPress}>
                <Text style={styles.nt}>Dinner Cruise</Text>
                </TouchableOpacity>
            <View style={styles.starView}>
                <Image source={require('./assets/star.png')} style={styles.star} />
                < Image source={require('./assets/star.png')} style={styles.star} />
                <Image source={require('./assets/star.png')} style={styles.star} />
                <Image source={require('./assets/star.png')} style={styles.star} />
            </View>
            </View>
            <TouchableOpacity onPress={handleNewImgPress}>
             <Text style={styles.dollar}>Starting from $585</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button1} onPress={handleTour}>
             <Text style={styles.buttonText1}>Tour Dinner Cruise</Text>
            </TouchableOpacity>
        </View>
        </View>
        <View style={styles.info}>
            <Text style={styles.infotext}>You get a panoramic view to the
             forefront so you can enjoy the
              beauty of Paris: Eiffel Tower, Notre
               Dame, Pont Alexandre III and many
                more.</Text>
        </View>
        
      
    
        <View style={styles.labelCont}>
        <TouchableOpacity style={styles.button} onPress={handleMorePlaces}>
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}>View more Places</Text>
            <Image
            style={styles.pic2}
            resizeMode="cover"
            source={require("./assets/moreplaces.png")}
            />
          </View>
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
    paddingHorizontal: 20,
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
  inNew:{
    marginTop:10,
    flexDirection:'column',
    justifyContent:'flex-start'
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
  dollar:{
    left:-20,
    top:20,
    color:'grey',
    fontSize:15,
    fontWeight:"400",
    marginLeft:30

  },
  cont2:{
marginTop:370
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
  
  img: {
    alignItems:"center",
    marginBottom: 0,
    marginTop:-70
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
    backgroundColor: 'white',
    alignItems: 'center',
    paddingVertical: 18,
    borderRadius: 25,
  },
  buttonText: {
    color: 'black',
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
});

export default Places;
