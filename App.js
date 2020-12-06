import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import Home from './src/screens/home/Home';
import Nav from './src/component/nav/Nav';
import SearchBox from './src/component/searchBox/SearchBox';


export default function App() {
  return (
    
    <View style={styles.container}>
      <StatusBar hidden={true}/>
      <Nav />
      <SearchBox />
      <Home />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F1F1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
