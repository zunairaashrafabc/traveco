import * as React from "react";
import { StyleSheet, View, Text, ImageBackground,TouchableOpacity } from "react-native";

const LandingPage = () => {
  const handleStart = () => {
    navigation.navigate('Login')
    };
  return (
    <View style={styles.landingPage}>
      <ImageBackground
        style={styles.landingIcon}
        resizeMode="cover"
        source={require("./images/landing.png")}>
        <View style={styles.todos}>
            <Text style={styles.todo}>Traveco</Text>
        </View>
        <View style={styles.france}>
            <Text style={styles.fc}>Farm at your fingerprints</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleStart}>
        <Text style={styles.buttonText}>
          Get Started
        </Text>    
        </TouchableOpacity>
        
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
 
  traveco: {
    fontSize: 36,
    fontWeight: "700",
    fontFamily: "times",
    width: 320,
    height: 49,
  },
  travecoWrapper: {
    top: 153,
    left: 121,
    position: "absolute",
    color: "white"
  },
  farmAtYour: {
    top: 202,
    left: 117,
    fontSize: 20,
    fontFamily: "regular",
    width: 264,
    height: 37,
    position: "absolute",
    justifyContent:"center"
  },
  todos: {
    marginTop:180,
    flexDirection:"column",
   justifyContent:"center",
   alignItems:"center"
  },
  todo:{
    color:'white',
    fontWeight:"700",
    fontSize:30
  },
  landingItem: {
    top: 625,
    left: 62,
    borderRadius: 10,
    backgroundColor: "rgba(217, 217, 217, 0.45)",
    width: 251,
    height: 59,
    position: "absolute",
  },
  getStarted: {
    top: 642,
    left: 131,
    fontSize: 20,
    fontWeight: "500",
    fontFamily: "interMedium",
    position: "absolute",
    justifyContent:"center"
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
  landingIcon: {
    alignSelf: "stretch",
    height: 844,
    overflow: "hidden",
  },
  landingPage: {
    backgroundColor: "white",
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent:"center",
    alignItems:"center",
    overflow: "hidden"
    
  },
  button: {
    marginTop:400,
    backgroundColor: '#D9D9D9',
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
});

export default LandingPage;
