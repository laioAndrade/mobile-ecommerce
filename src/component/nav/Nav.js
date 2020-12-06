import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

import { FontAwesome } from '@expo/vector-icons'; 

import logo from '../../../assets/images/logo-supera.png';

const Nav = () => {
  return (
    <View style={styles.nav}>
      <Image style={styles.logo} source={logo}/>
      <TouchableOpacity >
        <FontAwesome name="shopping-cart" size={24} color="white" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  nav: {
    width: '100%',
    height: 60,
    backgroundColor: '#282C36',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30
  },
  logo: {
    width: '40%',
    height: 40
  }
})


export default Nav;