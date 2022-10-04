import { View, Text, FlatList } from 'react-native';
import React from 'react';
import OrderListItem from '../../components/OrderListItem';
import orders from "../../../assets/data/orders.json";
import { useOrderContext } from '../../contexts/OrderContext';

const OrderScreen = () => {
  const {orders} = useOrderContext();
  console.log(orders);
  return (
    <View style={{flex:1, width:'100%'}}>
      <FlatList 
      data={orders} 
      renderItem={({ item }) => <OrderListItem order={item} />}
      />
    </View>
  );
};

export default OrderScreen;