import { View, Text } from 'react-native';
import React from 'react';
import Input from './Input';
import { Feather, FontAwesome } from '@expo/vector-icons';
import SubmitButton from './SubmitButton';
import { validate } from 'validate.js';

const SignUpForm = () => {
  const inputchangeHandler = (inputId, inputValue) => {
    if (inputId === 'firstName' || inputId === 'lastName') {
      const constraints = {
        presence: { allowEmpty: false },
      };

      if (inputValue !== '') {
        constraints.format = {
          pattern: '[a-z]',
          flags: 'i',
          message: 'Value can only contain letters',
        };
      }
      console.log(
        validate({ [inputId]: inputValue }, { [inputId]: constraints })
      );
    } else if (inputId === 'email') {
    } else if (inputId === 'password') {
    }
  };
  return (
    <>
      <Input
        id='firstName'
        label={'First Name'}
        icon='user-o'
        iconPack={FontAwesome}
        iconSize={24}
        onInputChanged={inputchangeHandler}
      />

      <Input
        id='lastName'
        label={'Last Name'}
        icon='user-o'
        iconPack={FontAwesome}
        iconSize={24}
        onInputChanged={inputchangeHandler}
      />
      <Input
        id='email'
        label={'Email'}
        icon='mail'
        iconPack={Feather}
        iconSize={24}
        onInputChanged={inputchangeHandler}
      />
      <Input
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
