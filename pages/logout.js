import React from 'react';
import { StyleSheet, View, Image, Dimensions, Text, TouchableOpacity } from 'react-native';

// Get the screen width and height for positioning
const { width, height } = Dimensions.get('window');

const App = () => {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require('./assets/logo.png')} // Replace with your local logo image
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Welcome Text */}
      <View style={styles.textContainer}>
        <Text style={styles.welcomeText}>Welcome</Text>
      </View>

      {/* Log Out Button */}
      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', // Align horizontally
  },
  logo: {
    position: 'absolute',
    top: height / 25,
    left: width / 2 - (width * 0.6) / 2,
    width: width * 0.6,
    height: width * 0.38,
  },
  textContainer: {
    position: 'absolute',
    top: height * 0.1 + width * 0.5,
    left: 20,
    width: width - 40,
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
  },
    buttonContainer: {
    position: 'absolute',
    top: height * 0.1 + width * 1.14,
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
});

export default App;