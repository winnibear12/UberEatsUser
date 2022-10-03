import {View, Text, StyleSheet,FlatList} from 'react-native';
import restaurants from '../../../assets/data/restaurants.json';
import {AntDesign} from "@expo/vector-icons";
import {useState} from 'react';



const restaurant = restaurants[0];

const BasketDishItem = ({basketDish}) => {
    return(
        
        <View style={styles.row}>
            <View style ={styles.quantityContainer}>
            <Text>{basketDish.quantity}</Text>
           </View>
            <Text style={{fontweight:"600"}}>{basketDish.Dish.name}</Text>
            <Text style={{marginLeft:"auto"}}>${basketDish.Dish.price}</Text>
            </View>

    );
};

export default BasketDishItem;

const styles = StyleSheet.create({

    row:{
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 15,
        paddingHorizontal: 10,
    },
    quantityContainer:{
        backgroundColor:"lightgrey",
        paddingHorizontal:5,
        paddingVertical:2,
        marginRight:10,
        marginLeft:5,
        borderRadius: 3,
    },
});