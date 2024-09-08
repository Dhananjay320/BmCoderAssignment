import React from 'react';
import { StyleSheet, View, Image, Dimensions, Text, TextInput, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign'; 

const { width, height } = Dimensions.get('window');

const App = () => {
  return (
    <View style={styles.container}>
      {/* Background Image */}
      <Image
        source={require('./assets/leftdown.png')}
        style={styles.backgroundImage}
        resizeMode="contain"
      />

      {/* Logo */}
      <Image
        source={require('./assets/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <View style={styles.textContainer}>
        <Text style={styles.titleText}>Sign In</Text>
        <Text style={styles.subtitleText}>
          Hi! Welcome back, you{"\n"}have been missed
        </Text>
      </View>

      <View style={styles.emailContainer}>
        <Text style={styles.emailText}>Email</Text>
        <View style={styles.inputContainer}>
          <MaterialCommunityIcons name="email-outline" size={24} color="#808080" style={styles.icon} />
          <TextInput
            style={styles.textInput}
            placeholder="xyz@gmail.com"
            placeholderTextColor="#808080"
          />
        </View>
      </View>

      <View style={styles.passwordContainer}>
        <Text style={styles.passwordText}>Password</Text>
        <View style={styles.inputContainer}>
          <Feather name="lock" size={24} color="#808080" style={styles.icon} />
          <TextInput
            style={styles.textInput}
            placeholder="password"
            placeholderTextColor="#808080"
            secureTextEntry
          />
        </View>
      </View>

      <View style={styles.forgotPasswordContainer}>
        <Text style={styles.forgotPasswordText}>Forgot password?</Text>
      </View>

      <View style={styles.buttonSignInContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.orContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>or</Text>
        <View style={styles.line} />
      </View>

      <View style={styles.socialButtonContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <AntDesign name="google" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
          <AntDesign name="apple1" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don’t have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.signupButton}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.termsContainer}>
        <Text style={styles.termsText}>By login or sign up, you agree to our terms of use and</Text>
        <TouchableOpacity>
          <Text style={styles.privacyPolicyText}>privacy policy</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  backgroundImage: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: width * 0.68, 
    height: width * 0.35 * (247 / 180), 
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
    top: height * 0.1 + width * 0.28,
    left: 20,
    width: width - 40,
    alignItems: 'flex-start', 
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'left',
  },
  subtitleText: {
    fontSize: 15,
    color: '#666',
    textAlign: 'left',
    marginTop: 10,
  },
  emailContainer: {
    position: 'absolute',
    top: height * 0.1 + width * 0.58,
    left: 20,
    width: width - 40,
  },
  emailText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'left',
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#808080',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    height: 40,
    fontSize: 15,
  },
  passwordContainer: {
    position: 'absolute',
    top: height * 0.1 + width * 0.8,
    left: 20,
    width: width - 40,
  },
  passwordText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'left',
    marginBottom: 10,
  },
  forgotPasswordContainer: {
    position: 'absolute',
    top: height * 0.1 + width * 1.02,
    right: 20,
  },
  forgotPasswordText: {
    fontSize: 15,
    color: '#000',
    textDecorationLine: 'underline',
    textAlign: 'right',
  },
  buttonSignInContainer: {
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
  orContainer: {
    position: 'absolute',
    top: height * 0.1 + width *1.37,
    left: 0,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  orText: {
    fontSize: 16,
    color: '#000',
    marginHorizontal: 10,
  },
  line: {
    width: 80,
    height: 1,
    backgroundColor: '#000',
  },
  socialButtonContainer: {
    position: 'absolute',
    top: height * 0.1 + width * 1.47,
    left: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 32,
    borderColor: '#A3CFFF',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  signupContainer: {
    position: 'absolute',
    top: height * 0.1 + width * 1.65,
    left: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupText: {
    fontSize: 15,
    color: 'black',
  },
  signupButton: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginLeft: 5,
  },
  termsContainer: {
    position: 'absolute',
    top: height * 0.1 + width * 1.8,
    left: 0,
    width: '100%',
    alignItems: 'center',
  },
  termsText: {
    fontSize: 15,
    color: '#808080',
    textAlign: 'center',
  },
  privacyPolicyText: {
    fontSize: 15,
    color: '#808080',
    textAlign: 'center',
  },
});

export default App;

