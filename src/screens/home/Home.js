import React, {useState, useEffect} from 'react';
import { View, StyleSheet, FlatList, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';

import dt from '../../../products.json';
import {images} from '../../../images';

import { FontAwesome5 } from '@expo/vector-icons';

const Home = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    return setData(dt);
  }, [])

  return (
    <View style={styles.container}>
      <FlatList  
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      data={data} 
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => {
        let imagePath = images[item.id];

        return (
          <View style={styles.itemList}>
            <View style={styles.game}>
              <Image style={{width: 60, height: 60}} source={imagePath}/>
              <View style={{width: 100}}>
                <Text style={styles.name} >{item.name}</Text>
                <Text style={styles.price} >${item.price}</Text>
              </View>
            </View> 
            
            <View>
              <TouchableOpacity style={styles.addToCart}>
                <FontAwesome5 name="cart-plus" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        )
      }

      }/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 0,
    marginVertical: 0,
    padding: 0,
  },

  itemList: {
    borderBottomWidth: 0,
    backgroundColor: '#fff',
    marginBottom: 20,
    borderRadius: 20,
    width: 320,
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    elevation: 5,
  },
  game: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  image: {
    width: 40,
    maxHeight: 'auto'
  },

  name: {
    color: '#F16E4A',
    fontWeight: "bold", 
  },

  price: {
    color: '#877F81'
  },
  addToCart: {
    backgroundColor: '#F16E4A',
    width: 40,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'

  }

})


export default Home;