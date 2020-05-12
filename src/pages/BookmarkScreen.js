import React from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';

const BookmarkScreen = ({navigation}) => {
  return (
    <View 
      style={{ 
        flex:1, 
        alignItems: 'center', 
        justifyContent: 'center'
      }}
    >
      <Text>BookmarkScreen</Text>
      <Button 
        title='Click Here...' 
        onPress={() => alert('Button Clicked!')}
      />
    </View>
  );
};

export default BookmarkScreen;