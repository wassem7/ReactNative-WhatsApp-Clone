import { View, Text, Button } from 'react-native';
import React from 'react';

const ChatListScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ fontSize: 30 }}>ChatListScreen</Text>
      <Button
        title='Go to Chat Screen'
        onPress={() => {
          navigation.navigate('chatscreen');
        }}
      />
    </View>
  );
};

export default ChatListScreen;
