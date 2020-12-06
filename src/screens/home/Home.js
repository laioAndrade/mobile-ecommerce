import React, {useState, useEffect} from 'react';
import { View, StyleSheet, FlatList, Text, Image, Button, TouchableOpacity } from 'react-native';

import dt from '../../../products.json';
import logo from '../../../assets/images/logo-supera.png';

import { FontAwesome5 } from '@expo/vector-icons';

const Home = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    return setData(dt);
  }, [])

  return (
    <View style={styles.container}>
      <FlatList 
      data={data} 
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => {
        let imagePath = `../../../assets/images/${item.image}`;
        console.log(imagePath);
        return (
          <View style={styles.itemList}>
            <View style={styles.game}>
              {/* <Image style={{ width: 60, height: 50}} 
                source={require(imagePath)} /> */}
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
    marginTop: 170,
    flex: 1,
    alignItems: 'center',
  },

  itemList: {
    borderBottomWidth: 0,
    backgroundColor: '#fff',
    marginBottom: 40,
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