import React from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';

const DetailScreen = ({navigation}) => {
  return (
    <View 
      style={{ 
        flex:1, 
        alignItems: 'center', 
        justifyContent: 'center'
      }}
    >
      <Text>DetailScreen</Text>
      <Button 
        title='Go to details screen...again' 
        onPress={() => navigation.push('Detail')}
      />
      <Button 
        title='Go to home' 
        onPress={() => navigation.navigate('Home')}
      />
      <Button 
        title='Go back' 
        onPress={() => navigation.goBack()}
      />
      <Button 
        title='Go to the first screen' 
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
};

export default DetailScreen;