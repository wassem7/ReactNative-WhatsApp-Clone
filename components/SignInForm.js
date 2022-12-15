import { View, Text } from 'react-native';
import React from 'react';
import Input from './Input';
import { Feather, FontAwesome } from '@expo/vector-icons';
import SubmitButton from './SubmitButton';

const SignInForm = () => {
  return (
    <>
      <Input
        label={'Email'}
        icon='mail'
        iconPack={Feather}
        autoCapitalize='none'
        iconSize={24}
        keyboardType='email-address'
      />
      <Input
        label={'Password'}
        autoCapitalize='none'
        secureTextEntry
        icon='lock'
        iconPack={Feather}
        iconSize={24}
      />
      <SubmitButton
        title='Sign In'
        onPress={() => console.log('Button Pressed !')}
        style={{ marginTop: 20 }}
      />
    </>
  );
};

export default SignInForm;
