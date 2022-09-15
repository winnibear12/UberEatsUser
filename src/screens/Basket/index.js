import {View, Text, StyleSheet,FlatList} from 'react-native';
import restaurants from '../../../assets/data/restaurants.json';
import {AntDesign} from "@expo/vector-icons";
import {useState} from 'react';
import BasketDishItem from '../../components/BasketDishItem';


const restaurant = restaurants[0];


const Basket = () => {
    const [quantity,setQuantity] = useState(1);

    return(
        <View style={styles.page}>
            <Text style ={styles.name}>{restaurant.name}</Text>
            <Text style={{fontWeight:"bold", marginTop:28, fontSize:19}}> 
            Your items
            </Text>
            
           <FlatList
            data = {restaurant.dishes}
            renderItem={({item}) => <BasketDishItem basketDish={item} />}
            />
    
            <View style = {styles.separator}/>

            <View style={styles.button}>
                <Text style={styles.buttonText}> Create order 
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

    page:{
        flex:1,
        width: "100%",
        paddingVertical:30,
    },
    name:{
        fontSize:30,
        fontWeight:"600",
        marginVertical:10,

    },
    description:{
        color:"grey",
    },
    separator:{
        height:1,
        backgroundColor:"lightgrey",
        marginVertical:10,
    },
    row:{
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 15,
    },
    quantity:{
        fontSize:25,
        marginHorizontal:20,
    },
    button:{
        backgroundColor:'black',
        marginTop:"auto",
        padding: 20,
        alignItems: "center",
    },
    buttonText:{
        color:"white",
        fontWeight: "600",
        fontSize: 20,
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

export default Basket;
