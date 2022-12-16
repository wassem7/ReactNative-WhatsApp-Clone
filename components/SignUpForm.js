import { View, Text } from 'react-native';
import React, { useReducer } from 'react';
import Input from './Input';
import { Feather, FontAwesome } from '@expo/vector-icons';
import SubmitButton from './SubmitButton';
import { validateInput } from '../utils/actions/formActions';

const SignUpForm = () => {
  const reducer = () => {};

  const initialState = () => {
    (inputValidities = {
      firstName: false,
      lastName: false,
      email: false,
      password: false,
    }),
      (formisValid = false);
  };
  const [formState, dispatchFormState] = useReducer(initialState, reducer);
  const inputchangeHandler = (inputId, inputValue) => {
    const result = validateInput(inputId, inputValue);
    dispatchFormState({ validationResult: result });
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
        disabled={!formState.formisValid}
      />
    </>
  );
};

export default SignUpForm;
