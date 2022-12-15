import { View, Text } from 'react-native';
import React from 'react';
import Input from './Input';
import { Feather, FontAwesome } from '@expo/vector-icons';
import SubmitButton from './SubmitButton';
import {
  validateEmail,
  validatePassword,
  validateString,
} from '../utils/ValidationConstriants';

const SignUpForm = () => {
  const inputchangeHandler = (inputId, inputValue) => {
    if (inputId === 'firstName' || inputId === 'lastName') {
      console.log(validateString(inputId, inputValue));
    } else if (inputId === 'email') {
      console.log(validateEmail(inputId, inputValue));
    } else if (inputId === 'password') {
      console.log(validatePassword(inputId, inputValue));
    }
  };
  return (
    <>
      <Input
        id='firstName'
        label={'First Name'}
        icon='user-o'
        iconPack={FontAwesome}
        autoCapitalize='none'
        iconSize={24}
        onInputChanged={inputchangeHandler}
      />

      <Input
        id='lastName'
        label={'Last Name'}
        icon='user-o'
        autoCapitalize='none'
        iconPack={FontAwesome}
        iconSize={24}
        onInputChanged={inputchangeHandler}
      />
      <Input
        id='email'
        label={'Email'}
        icon='mail'
        keyboardType='email-address'
        autoCapitalize='none'
        iconPack={Feather}
        iconSize={24}
        onInputChanged={inputchangeHandler}
      />
      <Input
        autoCapitalize='none'
        secureTextEntry
        id='password'
        label={'Password'}
        icon='lock'
        iconPack={Feather}
        iconSize={24}
        onInputChanged={inputchangeHandler}
      />
      <SubmitButton
        title='Sign Up'
        onPress={() => console.log('Button Pressed !')}
        style={{ marginTop: 20 }}
      />
    </>
  );
};

export default SignUpForm;
