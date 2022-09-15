import {View, Text, Image, FlatList, StyleSheet} from 'react-native';
import restaurants from'../../../assets/data/restaurants.json';
import{Ionicons} from "@expo/vector-icons";
import DishListItem from '../../components/DishListItem';
import Header from "./Header";
import styles from "./styles";
const restaurant = restaurants[0];
import {useRoute} from "@react-navigation/native"

const RestaurantDetailsPage = () => {

    const route = useRoute();

    const id = route.params.id;
    console.warn(id);

    return(
        <View style={styles.page}>
           <FlatList
           ListHeaderComponent={() => <Header restaurant={restaurant}/>}
            data={restaurant.dishes}
            renderItem= {({item}) => <DishListItem dish={item} />}
            keyExtractor={(item) => item.name}
           />

        <Ionicons 
            name="arrow-back-circle"
            size = {45}
            color="white"
            style={styles.iconContainer}
        />
            

        </View>
    );
};



export default RestaurantDetailsPage;