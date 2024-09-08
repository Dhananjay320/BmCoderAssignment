import React, { useState } from 'react';
import { StyleSheet, View, Image, Dimensions, Text, TextInput, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'; // Import Feather icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; // Import MaterialCommunityIcons
import CheckBox from 'expo-checkbox'; // Import CheckBox

// Get the screen width and height for positioning
const { width, height } = Dimensions.get('window');

const App = () => {
  const [isChecked, setChecked] = useState(false); // State to manage checkbox status

  return (
    <View style={styles.container}>
      {/* Background Image */}
      <Image
        source={require('./assets/rightdown.png')} // Replace with your local image
        style={styles.backgroundImage}
        resizeMode="contain" // Ensures the entire image is visible
      />

      {/* Logo */}
      <Image
        source={require('./assets/logo.png')} // Replace with your local logo image
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Text below the Logo */}
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>Sign Up</Text>
        <Text style={styles.subtitleText}>
          Fill in the below form and add life to
        </Text>
        <Text style={styles.subtitleText}>your car!</Text>
      </View>

      {/* "Name" Field */}
      <View style={styles.nameContainer}>
        <Text style={styles.fieldText}>Name</Text>
        <View style={styles.inputContainer}>
          <Feather name="user" size={24} color="#808080" style={styles.icon} />
          <TextInput
            style={styles.textInput}
            placeholder="Enter your name"
            placeholderTextColor="#808080"
          />
        </View>
      </View>

      {/* "Email" Field */}
      <View style={styles.emailContainer}>
        <Text style={styles.fieldText}>Email</Text>
        <View style={styles.inputContainer}>
          <MaterialCommunityIcons name="email-outline" size={24} color="#808080" style={styles.icon} />
          <TextInput
            style={styles.textInput}
            placeholder="Enter your email"
            placeholderTextColor="#808080"
          />
        </View>
      </View>

      {/* "Password" Field */}
      <View style={styles.passwordContainer}>
        <Text style={styles.fieldText}>Password</Text>
        <View style={styles.inputContainer}>
          <Feather name="lock" size={24} color="#808080" style={styles.icon} />
          <TextInput
            style={styles.textInput}
            placeholder="Enter your password"
            placeholderTextColor="#808080"
            secureTextEntry
          />
        </View>
      </View>

      {/* CheckBox and Text */}
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isChecked}
          onValueChange={setChecked}
          tintColors={{ true: '#000', false: '#000' }} // Adjust checkbox color
        />
        <Text style={styles.checkboxText}>Agree with </Text>
        <Text style={styles.checkboxTextSilver}>Terms & Conditions</Text>
      </View>

      {/* Sign Up Button */}
      <View style={styles.buttonSignInContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: isChecked ? '#A3CFFF' : '#C0C0C0' }]} // Change color based on checkbox state
          onPress={() => {
            if (isChecked) {
              // Handle sign up action here
            }
          }}
          disabled={!isChecked} // Disable button if checkbox is not checked
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      {/* Already have an account? with Sign In Button */}
      <View style={styles.signInContainer}>
        <Text style={styles.signInText}>Already have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.signInButtonText}> Sign In</Text>
        </TouchableOpacity>
      </View>

      {/* Terms and Privacy Text */}
      <View style={styles.termsContainer}>
        <Text style={styles.termsText}>
          By login or sign up, you agree to our terms of use and
        </Text>
        <Text style={styles.termsText}>privacy policy</Text>
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
    right: 0, // Align the image to the bottom-right corner
    width: width * 0.68, // Adjust width of the image
    height: width * 0.35 * (247 / 180), // Maintain aspect ratio of 180x247
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
    top: height * 0.1 + width * 0.25, // Reduced spacing below the logo
    left: 20, // Align with screen margins
    width: width - 40, // Ensure the text fits within the screen width
    alignItems: 'flex-start', // Align text to the left
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000', // Black color
    textAlign: 'left',
    paddingBottom: 10, // Reduced space below the title
  },
  subtitleText: {
    fontSize: 15,
    color: '#808080', // Gray color
    textAlign: 'left',
    lineHeight: 15, // Tight line spacing
  },
  fieldText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000', // Black color
    textAlign: 'left',
    marginBottom: 10, // Space between label and input field
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#808080',
    borderWidth: 1,
    borderRadius: 8, // Border radius of 8px
    paddingHorizontal: 10,
    height: 50, // Height of the input field
  },
  icon: {
    marginRight: 10, // Space between icon and text input
  },
  textInput: {
    flex: 1,
    height: 50, // Height of the input field
    fontSize: 15,
    color: '#000', // Text color in the input field
  },
  nameContainer: {
    position: 'absolute',
    top: height * 0.1 + width * 0.5, // Adjusted spacing below the existing text
    left: 20, // Align with screen margins
    width: width - 40, // Ensure the text fits within the screen width
  },
  emailContainer: {
    position: 'absolute',
    top: height * 0.1 + width * 0.74, // Spacing below the "Name" field
    left: 20, // Align with screen margins
    width: width - 40, // Ensure the text fits within the screen width
  },
  passwordContainer: {
    position: 'absolute',
    top: height * 0.1 + width * 0.98, // Spacing below the "Email" field
    left: 20, // Align with screen margins
    width: width - 40, // Ensure the text fits within the screen width
  },
  checkboxContainer: {
    position: 'absolute',
    top: height * 0.1 + width * 1.26, // Spacing below the "Password" field
    left: 20, // Align with screen margins
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxText: {
    fontSize: 15,
    paddingLeft: 15,
    color: '#000', // Black color
  },
  checkboxTextSilver: {
    fontSize: 15,
    textDecorationLine: 'underline',
    color: '#C0C0C0', // Silver color
  },
  buttonSignInContainer: {
    position: 'absolute',
    top: height * 0.1 + width * 1.4, // Adjusted spacing below the checkbox
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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  signInContainer: {
    position: 'absolute',
    top: height * 0.1 + width * 1.63, // Adjusted spacing below the sign-up button
    left: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInText: {
    fontSize: 16,
    color: '#000', // Black color
  },
  signInButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000', // Black color
    textDecorationLine: 'underline',
  },
  termsContainer: {
    position: 'absolute',
    top: height * 0.1 + width * 1.74, // Adjusted spacing below the sign-in section
    left: 0,
    width: '100%',
    alignItems: 'center',
  },
  termsText: {
    fontSize: 15,
    color: '#808080', // Gray color
    textAlign: 'center',
  },
});

export default App;