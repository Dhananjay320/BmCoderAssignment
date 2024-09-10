import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Modal, Alert } from 'react-native';

 export const Sininapi = ({ phoneNo, password, retry,data,changescreen }) => {
  const [isLoading, setIsLoading] = useState(false);

  const loginUser = async () => {
    setIsLoading(true);

    try {
      const response = await fetch('https://tor.appdevelopers.mobi/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phone: phoneNo,
          password: password,
        }),
      });

      const result = await response.json();
      setIsLoading(false);

      if (result.status === true) {
        const name = result.data.name;
        data(name);
        changescreen();
         
      } else {
        console.log(result);
        showRetryAlert(result.message || 'Login failed');
      }
      
    } catch (err) {
      setIsLoading(false);
      console.log(err.message || 'An error occurred.');
      showRetryAlert(err.message || 'An error occurred. Please try again.');
    }
  };

  const showRetryAlert = (errorMessage) => {
    Alert.alert(
      'Login Error',
      errorMessage,
      [
        {
          text: 'Retry',
          onPress: retry,
        },
      ],
      { cancelable: true }
    );
  };

  useEffect(() => {
    loginUser();
  }, []);

  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={isLoading}
      onRequestClose={() => {
        // Optionally handle request close
      }}
    >
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text style={styles.loadingText}>Please wait...</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#000',
  },
});