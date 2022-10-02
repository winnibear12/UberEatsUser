import { StyleSheet, View, FlatList} from "react-native";
import RestaurantItem from "../../components/RestaurantItem";
import {useState, useEffect} from 'react';
import {DataStore} from 'aws-amplify';
import { Restaurant } from "../../models";


export default function HomeScreen() {

  const [restaurants,setRestaurants] = useState([]);

  // const fetchRestaurants = async () => {
  //   const results = await DataStore.query(Restaurant);
  //   console.log(results);
  // };


    useEffect(()=> {
      // const results = await DataStore.query(Restaurant);
      // setRestaurants(results);
      DataStore.query(Restaurant).then((results) => setRestaurants(results)); 
      // fetchRestaurants();

  }, []);


  return (
    <View style={styles.page}>
      <FlatList 
      data={restaurants} 
      renderItem={({item}) => <RestaurantItem restaurant={item} />}
      showsVerticalScrollIndicator ={false}
      />
      </View>
    
  );
}


const styles = StyleSheet.create({
  page:{
    padding:10,
  },
}); 


