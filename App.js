import React, { useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import { Welcome } from './pages/welcome.js';
import { Sinin } from './pages/sinin.js';
import { Sinup } from './pages/sinup.js';
import { Logout } from './pages/logout.js';

export const App = () => {
  const [name, setname] = useState();
  const [Welcomescreen, setwelcomescreen] = useState(true);
  const [sinin, setsinin] = useState(false);
  const [sinup, setsinup] = useState(false);
  const [logout, setlogout] = useState(false);

  const setnamedata = (props) => {
    setname(props);
  };

  const handlewelcometongal = (props) => {
    setwelcomescreen(props);
  };

  const handlesinintongal = (props) => {
    setsinin(props);
  };

  const handlesinuptongal = (props) => {
    setsinup(props);
  };

  const handlelogouttongal = (props) => {
    setlogout(props);
  };

  if (Welcomescreen) {
    return (
      <Welcome
        sinin={handlesinintongal}
        sinup={handlesinuptongal}
        Welcomescreen={handlewelcometongal}
      />
    );
  } else if (sinin) {
    return (
      <Sinin
        sinin={handlesinintongal}
        data={setnamedata}
        logout={handlelogouttongal}
        sinup={handlesinuptongal}
      />
    );
  } else if (sinup) {
    return (
      <Sinup
        sinin={handlesinintongal}
        data={setnamedata}
        logout={handlelogouttongal}
        sinup={handlesinuptongal}
      />
    );
  } else if (logout) {
    return (
      <Logout
        Welcomescreen={handlewelcometongal}
        name={name}
        sinin={handlesinintongal}
        sinup={handlesinuptongal}
      />
    );
  } else {
    // You can return a default component or a loading screen here
    return <View />;
  }
};