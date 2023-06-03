import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';


const NavBar=()=>{
  const handleHomeIconPress = () => {
    navigation.navigate('Home')
  };
  const handleChatIconPress = () => {
    navigation.navigate('ChatBot')
  };
  const handleRecmIconPress = () => {
    navigation.navigate('Recommendation')
  };
  const handleProfileIconPress = () => {
    navigation.navigate('Profile')
  };
  return(
<View style={styles.icons}>
        <TouchableOpacity onPress={handleHomeIconPress}>
          <Image source={require('./assets/homeicon.png')} style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleChatIconPress}>
          <Image source={require('./assets/chaticon.png')} style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleRecmIconPress}>
          <Image source={require('./assets/recm.png')} style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleProfileIconPress}>
          <Image source={require('./assets/profileicon.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
  );
};
const styles = StyleSheet.create({
  icons:{
    alignSelf:"center",
    marginTop:27,
    marginBottom:20,
    width:381,
    height:72,
    flexDirection:'row',
    justifyContent:"space-evenly",
    alignItems:"center",
    backgroundColor:'white',
    borderRadius:40,
    position:"relative"
  },
  icon:{
    height: 42,
    width: 44,
  },
});

export default NavBar;
