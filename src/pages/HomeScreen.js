import React from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View 
      style={{ 
        flex:1, 
        alignItems: 'center', 
        justifyContent: 'center'
      }}
    >
      <Text>HomeScreen</Text>
      <Button 
        title='Go to details screen' 
        onPress={() => navigation.navigate('Detail')}
      />
    </View>
  );
};

export default HomeScreen;