import React, { useState } from 'react';
import { View, Text, TextInput,Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import NavBar from './NavBar';

const Stack = createStackNavigator();
const Food = ({navigation}) => {
const handleAppNav = () => {
    navigation.navigate('AppNav')
    };
const handleNotification = () => {
navigation.navigate('Notification')
};
const handleAll = () => {
    navigation.navigate('All')
  };
  const handleItalian = () => {
    navigation.navigate('Italian')
  };
  const handleAsian = () => {
    navigation.navigate('Asian')
  };
  const handleChinese = () => {
    navigation.navigate('Chinese')
  };
  const handleFrench = () => {
    navigation.navigate('French')
  };
  const handlefood1 = () => {
    navigation.navigate('Food')
  };
  const handlefoods = () => {
    navigation.navigate('Food')
  };
  return (
    <View style={styles.container}>
        <Image source={require('./assets/mus1.png')} style={styles.image} />
        <View style={styles.cont2}>
        
          <View style={styles.imglogo}>
            <Image source={require('./assets/logo.png')} style={styles.img2} />
          </View>

          <View style={styles.img}>
            <TouchableOpacity onPress={handleAppNav}>
                <Image source={require('./assets/bar.png')} style={styles.imgg} />
            </TouchableOpacity>
            <Text style={styles.traveco}>Traveco</Text>
            <TouchableOpacity onPress={handleNotification}>
                <Image source={require('./assets/notf.png')} style={styles.imgg1} />
            </TouchableOpacity>
          </View>


         <View style={styles.todos}>
            <Text style={styles.todo}>Paris</Text>
        </View>
        <View style={styles.france}>
            <Text style={styles.fc}>France</Text>
        </View>

        <View style={styles.smcard}>
        <Text style={styles.txtt}>4.9</Text>
        <Image source={require('./assets/star.png')} style={styles.star1} />
        </View>

        <View style={styles.card}>
        <TouchableOpacity onPress={handleAll}>
        <Text style={styles.txt1}>All</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleItalian}>
        <Text style={styles.ital}>Italian</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleAsian}>
        <Text style={styles.txt3}>Asian</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleChinese}>
        <Text style={styles.txt4}>Chinese</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleFrench}>
        <Text style={styles.txt5}>French</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.whit}>
            <TouchableOpacity onPress={handlefood1}>
                    <Image source={require('./assets/food1.png')} style={styles.f1} />
            </TouchableOpacity>
            {/* <TouchableOpacity style={styles.images} onPress={handlefoods}>
                <Image source={require('./assets/food2.png')} style={styles.f2} />
                <Text style={styles.txt6}>+ 10</Text>
            </TouchableOpacity> */}
            <TouchableOpacity style={styles.images} onPress={handlefoods}>
                <View style={styles.imageWrapper}>
                    <Image source={require('./assets/food2.png')} style={styles.f2} />
                    {/* <Text style={styles.txt6}>+ 10</Text> */}
                </View>
            </TouchableOpacity>

        </View>

        <View style={styles.info}>
            <Text style={styles.bold}>
                Details
            </Text>
            <Text style={styles.infotext}>There are so many foods you must eat in
            Paris but this article might be too long if we
            list all of it. This guide includes so..Read More
            </Text>
        </View>
        <View style={styles.labelCont}>
        <TouchableOpacity style={styles.button} onPress={handlefood1}>
            <Text style={styles.buttonText}>Done!</Text>
           
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
    backgroundColor: 'white',
  },
  cont2:{
    marginTop:200
      },
images:{
    justifyContent:"center",
    alignItems:"center"
},
txt6:{
    color:'red',
    fontSize:15,
    fontWeight:"300"
},
bold:{
    color:'black',
    fontSize:17,
    fontWeight:"700"
},
  txt1:{
    color:'black',
    fontSize:15,
    fontFamily:"Bold",
    fontWeight:"600"
  },
  txt3:{
    color:'black',
    fontSize:15,
    fontFamily:"Bold",
    fontWeight:"600"
  },
  txt4:{
    color:'black',
    fontSize:15,
    fontFamily:"Bold",
    fontWeight:"600"
  },
  txt5:{
    color:'black',
    fontSize:15,
    fontFamily:"Bold",
    fontWeight:"600"
  },
  whit:{
    backgroundColor:'white',
    flexDirection:"row",
    justifyContent:'space-around',
    marginTop:5
  },
  star1:{
    width:13,
    height:13
  },
  imageWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  f1:{
    width:136,
    height:187

  },
  f2:{
    width:136,
    height:187
  },
  smcard:{
    backgroundColor:"white",
    borderRadius:20,
    paddingHorizontal:4,
    paddingVertical:4,
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row",
    marginLeft:130,
    marginTop:5,
    marginRight:130
  },
  france:{
    marginTop:10,
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center"
  },
  fc:{
    color:'white',
    fontSize:16,
    fontFamily:"Regular",
    fontWeight:"500"

  },
  New:{
    flexDirection:"row",
    justifyContent:"space-around",
    marginLeft:30,

  },
  ital:{
    backgroundColor:"#0D986A",
    color:'white',
    paddingHorizontal:15,
    paddingVertical:10,
    borderRadius:15

  },
  txt2:{
   
    color:'black',
    paddingHorizontal:15,
    paddingVertical:10,
    borderRadius:15

  },
  card:{
    alignSelf:"center",
    marginTop:20,
    marginBottom:-5,
    width:381,
    height:72,
    flexDirection:'row',
    justifyContent:"space-around",
    alignItems:"center",
    backgroundColor:'#FFFFFF',
    borderRadius:50,
    position:"relative"
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
   justifyContent:"center",
   alignItems:"center"
  },
  todo:{
    color:'white',
    fontWeight:"400",
    fontSize:30
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
    marginTop:5
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
 
  labelContainer: {
    marginBottom: 0,
    justifyContent:"center",
    alignItems:"center",
  },
  
  traveco:{
    color:"white",
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
    marginTop:20,
    width: 460,
    height: 300,
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
    marginTop:-30,
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
    marginLeft:60,
    marginRight:60
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

export default Food;
