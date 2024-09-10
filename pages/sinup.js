import React, { useState } from 'react';
import { StyleSheet, View, Image, Dimensions, Text, TextInput, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CheckBox from 'expo-checkbox';
import {Sinupapi} from '../sinupapi.js'; // Correct import if it's a default export
import { Welcome } from './welcome.js';

const { width, height } = Dimensions.get('window');

export const Sinup = ({ sinin, data, logout, sinup }) => {
  const [isChecked, setChecked] = useState(false);
  const [isChecked1, setChecked1] = useState(false);
  const [name, setName] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    if (isChecked) {
      setChecked1(!isChecked1);
    } else {
      console.warn('Please agree to terms and conditions.');
    }
  };

  const logoutpagejump = () => {
    logout(true);
    sinin(false);
    Welcome(false);
    sinup(false);
  };

  const sininpagejump = () => {
    sinin(true);
    sinup(false);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/rightdown.png')}
        style={styles.backgroundImage}
        resizeMode="contain"
      />
      <Image
        source={require('../assets/images/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>Sign Up</Text>
        <Text style={styles.subtitleText}>Fill in the below form and add life to</Text>
        <Text style={styles.subtitleText}>your car!</Text>
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.fieldText}>Name</Text>
        <View style={styles.inputContainer}>
          <Feather name="user" size={24} color="#808080" style={styles.icon} />
          <TextInput
            style={styles.textInput}
            placeholder="Enter your name"
            placeholderTextColor="#808080"
            value={name}
            onChangeText={setName}
          />
        </View>
      </View>
      <View style={styles.emailContainer}>
        <Text style={styles.fieldText}>Email</Text>
        <View style={styles.inputContainer}>
          <MaterialCommunityIcons name="email-outline" size={24} color="#808080" style={styles.icon} />
          <TextInput
            style={styles.textInput}
            placeholder="Enter your mobile number"
            placeholderTextColor="#808080"
            value={phoneNo}
            onChangeText={setPhoneNo}
            keyboardType="numeric"
          />
        </View>
      </View>
      <View style={styles.passwordContainer}>
        <Text style={styles.fieldText}>Password</Text>
        <View style={styles.inputContainer}>
          <Feather name="lock" size={24} color="#808080" style={styles.icon} />
          <TextInput
            style={styles.textInput}
            placeholder="Enter your password"
            placeholderTextColor="#808080"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isChecked}
          onValueChange={setChecked}
          tintColors={{ true: '#000', false: '#000' }}
        />
        <Text style={styles.checkboxText}>    Agree with </Text>
        <Text style={styles.checkboxTextSilver}>Terms & Conditions</Text>
      </View>
      <View style={styles.buttonSignInContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: isChecked ? '#A3CFFF' : '#C0C0C0' }]}
          onPress={handleSignUp}
          disabled={!isChecked}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.signInContainer}>
        <Text style={styles.signInText}>            Already have an account?</Text>
        <TouchableOpacity onPress={sininpagejump}>
          <Text style={styles.signInButtonText}> Sign In</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.termsContainer}>
        <Text style={styles.termsText}>By signing up, you agree to our terms of use and</Text>
        <Text style={styles.termsText}>privacy policy</Text>
      </View>
      {isChecked1 && (
        <Sinupapi
          phoneNo={phoneNo}
          password={password}
          name={name}
          changescreen={logoutpagejump}
          setdata={data}
          retry={handleSignUp}
        />
      )}
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
    right: 0,
    width: width * 0.68,
    height: width * 0.35 * (247 / 180),
  },
  logo: {
    position: 'absolute',
    top: height *0,
    left: width / 2 - (width * 0.6) / 2,
    width: width * 0.6,
    height: width * 0.38,
  },
  textContainer: {
    position: 'absolute',
    top: height * 0.18,
    left: 20,
    width: width - 40,
    alignItems: 'flex-start',
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'left',
    paddingBottom: 10,
  },
  subtitleText: {
    fontSize: 15,
    color: '#808080',
    textAlign: 'left',
    lineHeight: 15,
  },
  fieldText: {
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
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 50,
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    height: 50,
    fontSize: 15,
    color: '#000',
  },
  nameContainer: {
    position: 'absolute',
    top: height * 0.29,
    left: 20,
    width: width - 40,
  },
  emailContainer: {
    position: 'absolute',
    top: height * 0.4,
    left: 20,
    width: width - 40,
  },
  passwordContainer: {
    position: 'absolute',
    top: height * 0.51,
    left: 20,
    width: width - 40,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: height * 0.63,
    left: 20,
    width: width - 40,
  },
  checkboxText: {
    fontSize: 14,
    color: '#000',
  },
  checkboxTextSilver: {
    fontSize: 14,
    color: '#808080',
  },
  buttonSignInContainer: {
    position: 'absolute',
    top: height * 0.7,
    left: 20,
    width: width - 40,
  },
  button: {
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signInContainer: {
    flexDirection: 'row',
    position: 'absolute',
    alignItems:'center',
    top: height * 0.78,
    left: 20,
    width: width - 40,
  },
  signInText: {
    fontSize: 15,
    color: '#000',
    textAlign:'center',
  },
  signInButtonText: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
  termsContainer: {
    position: 'absolute',
    top: height * 0.85,
    left: 20,
    width: width - 40,
  },
  termsText: {
    fontSize: 14,
    color: '#808080',
    textAlign:'center'
  },
});
