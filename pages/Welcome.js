import React from 'react';
import { StyleSheet, View, Image, Text, Dimensions, TouchableOpacity } from 'react-native';

// Get the screen width and height for positioning
const { width, height } = Dimensions.get('window');

export const Welcome = ({sinin, sinup,Welcomescreen}) => {
  const sinuppagejump = () =>{
    sinin(false);
    sinup(true);
    Welcomescreen(false);
  }
  const sininpagejump = () =>{
    sinin(true);
    Welcomescreen(false);
  }
  return (
    <View style={styles.container}>
      {/* Top right image */}
      <Image
        source={require('../assets/images/righttop.png')}
        style={styles.imageTopRight}
        resizeMode="contain"
      />

      {/* Top left image */}
      <Image
        source={require('../assets/images/lefttop.png')}
        style={styles.imageTopLeft}
        resizeMode="contain"
      />

      {/* Centered logo */}
      <Image
        source={require('../assets/images/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Text below the logo */}
      <View style={styles.textContainer}>
        <Text style={styles.textLine1}>Sparkle & Shine Transform</Text>
        <Text style={styles.textLine2}>Your Drive with Every Wash!</Text>
      </View>

      {/* Button and Sign In Text */}
      <View style={styles.buttonSignInContainer}>
        <TouchableOpacity style={styles.button} onPress={sinuppagejump}>
          <Text style={styles.buttonText}>Let’s Start</Text>
        </TouchableOpacity>
        <View style={styles.signInContainer}>
          <Text style={styles.plainText}>Already have an account?</Text>
          <TouchableOpacity onPress={sininpagejump}>
            <Text style={styles.signInButtonText}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  imageTopRight: {
    width: width * 0.59,    
    height: height * 0.3,  
    position: 'absolute',
    top: 0,
    right: 0,
  },
  imageTopLeft: {
    width: width * 0.59,    
    height:  height * 0.3, 
    position: 'absolute',
    top: 0,
    left: 0,
  },
  logo: {
    width: width * 0.8,    
    height: height * 0.48, 
    position: 'absolute',
    top: height * 0.15,     
    left: width / 2 - (width * 0.8) / 2, 
  },
  textContainer: {
    position: 'absolute',
    top: height * 0.15 + height * 0.45 + 20, 
    left: 0,
    width: '100%',
    alignItems: 'center', 
  },
  textLine1: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#808080',
    textAlign: 'center',
  },
  textLine2: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#808080',
    textAlign: 'center',
  },
  buttonSignInContainer: {
    position: 'absolute',
    top: height * 0.15 + height * 0.5 + 64 + 40, 
    left: 0,
    width: '100%',
    alignItems: 'center', 
  },
  button: {
    width: 360,
    height: 64,
    backgroundColor: '#A3CFFF',
    borderColor: '#94C7FF',
    borderWidth: 1,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#A3CFFF',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 8, 
  },
  buttonText: {
    fontSize: 25,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  signInContainer: {
    marginTop: 20, 
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  plainText: {
    fontSize: 16,
    color: '#808080',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  signInButtonText: {
    fontSize: 16,
    color: 'black',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    marginLeft: 10, 
  },
});


