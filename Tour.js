import React, { useState } from 'react';
import { View, Text, TextInput,Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import NavBar from './NavBar';
// import { useNavigation } from "@react-navigation/native";

// const navigation = useNavigation();
const Tour = ({navigation}) => {
const [date, setdate] = useState('');
const [day, setday] = useState('');

const handleAppNav = () => {
navigation.navigate('AppNav')
};
const handleNotification = () => {
navigation.navigate('Notification')
};
 
  return (
    <View style={styles.container}>
       
        <Image source={require('./assets/paris.png')} style={styles.image} />
        <View style={styles.con2}>
        
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
            <Text style={styles.todo}>Eiffel Tower</Text>
        </View>
        <View style={styles.france}>
            <Text style={styles.fc}>Paris, France</Text>
        </View>
        
        <Text style={styles.wel}>Tour Eiffel Tower</Text>
     
      
    
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Date"
          onChangeText={text => setdate(Date)}
          value={date}
        />
        
        <TextInput
          style={styles.input}
          placeholder="Enter Day"
          onChangeText={text => setday(text)}
          value={day}
        />
      </View>
      
      <View style={styles.info}>
            <Text style={styles.bold}>
                Tour Details
            </Text>
        <View style={styles.info11}>
            <View style={styles.info21}>
                <Text style={styles.bold}>
                2nd floor access 
                </Text>
                <Text style={styles.bold}>
                €52
                </Text>
            </View>
            <Text style={styles.infotext}>
             Ticket valid on the chosen date and time
             Meeting point is 5 minutes walk from the Eiffel Tower
            </Text>
        </View>
            <View style={styles.info1}>
            <View style={styles.info2}>
                    <Text style={styles.bold}>
                    3rd floor access 
                    </Text>
                    <Text style={styles.red}>
                    [sold out]
                    </Text>
            </View>
                    <Text style={styles.bold}>
                    €75
                    </Text>
            </View>
            
            <Text style={styles.infotext}>
            Ticket valid on the chosen date and time
            Led by a local guide, meeting point is 5 minutes
            walk from the Eiffel Tower ..Read More
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
    justifyContent: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#f2f2f2',
  },
  info1:{
    flexDirection:"row",
    justifyContent:"space-between"
  },
  info2:{
    top:5,
    flexDirection:"row",
    justifyContent:"space-evenly"
  },
  info21:{
    top:5,
    flexDirection:"row",
    justifyContent:"space-between"
  },
  info11:{
    flexDirection:"column",
    justifyContent:"space-between"
  },
  lc:{
    flexDirection:"row",
    justifyContent:"space-between"
  },
  con2:{
marginTop:200
  },
  labelContainer: {
    flexDirection: 'column',
    marginBottom: 0,
    justifyContent:"center",
    alignItems:"center",
  },
  info:{
    marginTop:-5,
    paddingHorizontal: 10,
    marginBottom:-15
  },
  
  infotext:{
    top:2,
    color:'black',
    fontSize:16,
    fontFamily:"Regular",
    fontWeight:"500"
  },
  traveco:{
    color:"white",
    fontSize:24,
    fontWeight:"bold",
    fontFamily:"calibari"
  },
red:{
    alignSelf:"center",
    color:'red',
    fontSize:17,
    fontWeight:"800"
},
  bold:{
    alignSelf:"center",
    color:'black',
    fontSize:17,
    fontWeight:"700"
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
    top:120,
    fontSize: 30,
    fontWeight: "600",
    fontFamily: "poppinsSemibold",
    textAlign: "center",
    textTransform: "capitalize",
    marginBottom:5
  },
  wel2:{
    color:"black",
    top:160,
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "poppinsSemibold",
    textAlign: "center",
    textTransform: "capitalize",
    marginTop:5
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
    marginTop:20,
    width: 384,
    height: 300,
    left: -10,
    top: -20,
    marginBottom:50,
    borderWidth: 1,
    position: "absolute",
    alignSelf:"center",
    borderRadius:20,
  },
  
  img: {
    flexDirection:'row',
    justifyContent:"space-around",
    marginBottom: 0,
    marginTop:5
  },
  img2: {
    top:-20,
    width: 33,
    height: 28,
  },
  france:{
    marginTop:10,
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    marginBottom:-20
  },
  fc:{
    color:'white',
    fontSize:16,
    fontFamily:"Regular",
    fontWeight:"500"

  },
  label: {
    color:"black",
    fontSize: 16,
    marginBottom: 5,
  },
  inputContainer: {
    marginTop: 130,
    marginLeft:10,
    marginRight:10,
    height:-5
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
  imgg: {
    marginLeft:10,
    width: 20,
    height: 25,
  },
  imglogo: {
    alignItems:"center",
    marginBottom: 0,
    marginTop:-130
  },
  todos: {
    marginTop:20,
    flexDirection:"column",
   justifyContent:"center",
   alignItems:"center"
  },
  todo:{
    color:'white',
    fontWeight:"400",
    fontSize:30
  },
  imgg1: {
    width: 20,
    height: 25,
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

export default Tour;
