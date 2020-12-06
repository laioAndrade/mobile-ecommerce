import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';

const SearchBox = () => {
  const [value, setValue] = useState('Search ...');

  return (
    <TextInput style={styles.searchBox} onChangeText={text => setValue(text)} value={value}/>
  )
}

const styles = StyleSheet.create({
  searchBox: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#D0CECF',
    borderRadius: 20,
    width: 270,
    height: 45,
    padding: 10,

    marginBottom: 30 
  }
})


export default SearchBox;