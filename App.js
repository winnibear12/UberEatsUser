import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import ReataurantDetailsScreen from './src/screens/RestaurantDetailsScreen';
import DishDetailsScreen from './src/screens/DishDetailsScreen';
import Basket from './src/screens/Basket';


export default function App() {
  return (
    <View style={styles.container}>
      {/* <ReataurantDetailsScreen /> */}
      {/* <HomeScreen /> */}
      {/* <DishDetailsScreen /> */}
      <Basket />
      <StatusBar style="light" />

  
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // padding:10,
    // paddingVertical:30,
  },
 
}); 
