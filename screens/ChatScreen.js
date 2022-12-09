import {
  View,
  Text,
  ImageBackground,
  Button,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, { useCallback, useState } from 'react';
import BImage from '../assets/images/dropletbackground.jpeg';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import colors from '../constants/colors';
const ChatScreen = () => {
  const [messageText, setmessageText] = useState('');
  const sendMessage = useCallback(() => {
    setmessageText('');
  }, [messageText]);
  return (
    <SafeAreaView
      edges={['left', 'right', 'bottom']}
      style={{ flex: 1, flexDirection: 'column' }}
    >
      <ImageBackground source={BImage} style={{ flex: 1 }} />
      <View
        style={{
          flexDirection: 'row',
          paddingVertical: 8,
          paddingHorizontal: 10,
          height: 50,
        }}
      >
        <TouchableOpacity
          style={styles.mediaButton}
          onPress={() => console.log('Pressed !')}
        >
          <Feather name='plus' size={24} color={colors.blue} />
        </TouchableOpacity>

        <TextInput
          onChangeText={(text) => {
            setmessageText(text);
          }}
          onSubmitEditing={sendMessage}
          value={messageText}
          style={{
            flex: 1,
            borderWidth: 1,
            borderRadius: 50,
            borderColor: colors.lightgrey,
            marginHorizontal: 15,
            paddingHorizontal: 12,
          }}
        />
        {messageText === '' && (
          <TouchableOpacity
            style={styles.mediaButton}
            onPress={() => console.log('Pressed !')}
          >
            <Feather name='camera' size={24} color={colors.blue} />
          </TouchableOpacity>
        )}

        {messageText !== '' && (
          <TouchableOpacity
            style={{ ...styles.mediaButton, ...styles.sendButton }}
            onPress={sendMessage}
          >
            <Feather name='send' size={18} color='white' />
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mediaButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 35,
  },
  sendButton: {
    backgroundColor: colors.blue,
    borderRadius: 50,
    padding: 7,
    width: 35,
  },
});
export default ChatScreen;
