import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Alert,Modal } from 'react-native';

export const Sinupapi = ({ phoneNo,password,name,changescreen,setdata,retry}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const registerUser = async () => {
    setIsLoading(true);
    setModalVisible(true);

    try {
      const response = await fetch('https://tor.appdevelopers.mobi/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phone: phoneNo, // API expects 'phone'
          password: password,
          name: name,
        }),
      });

      const result = await response.json();

      setIsLoading(false);
      setModalVisible(false);

      if (result.status === true) {
        const name = result.data.name;
        setdata(name);
        changescreen();
      } else {
        const errorMessage = getErrorMessage(result.error);
        showRetryAlert(errorMessage);
      }
      
    } catch (err) {
      setIsLoading(false);
      setModalVisible(false);
      showRetryAlert(err.message || 'An error occurred. Please try again.');
    }
  };

  const getErrorMessage = (errors) => {
    let errorMessages = [];

    if (errors.name) {
      errorMessages.push(`Name: ${errors.name[0]}`);
    }
    if (errors.phone) {
      errorMessages.push(`Phone: ${errors.phone[0]}`);
    }
    if (errors.password) {
      errorMessages.push(`Password: ${errors.password[0]}`);
    }

    return errorMessages.length > 0 ? errorMessages.join('\n') : 'Registration failed';
  };

  const showRetryAlert = (errorMessage) => {
    Alert.alert(
      'Registration Error',
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
    registerUser();
  }, []);

  return (
    <View style={styles.container}>
      <Modal
        transparent={true}
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.activityIndicatorWrapper}>
            <ActivityIndicator size="large" color="#0000ff" />
            <Text style={styles.loadingText}>Please wait...</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
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
