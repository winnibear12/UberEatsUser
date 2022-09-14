import {View, Text, Image, FlatList, StyleSheet} from 'react-native';
import restaurants from'../../../assets/data/restaurants.json';
import{Ionicons} from "@expo/vector-icons";
import DishListItem from '../../components/DishItem';
import styles from "./styles"

const restaurant = restaurants[0];
("");

const RestaurantDetailsPage = ({restaurant}) => {

    return(
        <View style={styles.page}>
            <Image source={{uri: restaurant.image}} style={styles.image}/>

                <View style={styles.container}>
                    <Text style={styles.title}>{restaurant.name}</Text>
                    <Text style={styles.subtitle}> 
                            ${restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}-
                            {restaurant.maxDeliveryTime} minutes
                            </Text>
                    <Text style={styles.menuTitle}>Menu</Text>
                </View>
        </View>
    );
};

export default RestaurantDetailsPage;