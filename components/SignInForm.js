import { View, Text } from 'react-native';
import React from 'react';
import Input from './Input';
import { Feather, FontAwesome } from '@expo/vector-icons';
import SubmitButton from './SubmitButton';
import { validateInput } from '../utils/actions/formActions';
const SignInForm = () => {
  const inputchangeHandler = (inputId, inputValue) => {
    console.log(validateInput(inputId, inputValue));
  };
  return (
    <>
      <Input
        id='email'
        label={'Email'}
        icon='mail'
        iconPack={Feather}
        autoCapitalize='none'
        iconSize={24}
        keyboardType='email-address'
        onInputChanged={inputchangeHandler}
      />
      <Input
        id='password'
        label={'Password'}
        autoCapitalize='none'
        secureTextEntry
        icon='lock'
        iconPack={Feather}
        iconSize={24}
        onInputChanged={inputchangeHandler}
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
