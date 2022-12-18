import React, { useCallback, useReducer } from 'react';
import Input from './Input';
import { Feather, FontAwesome } from '@expo/vector-icons';
import SubmitButton from './SubmitButton';
import { validateInput } from '../utils/actions/formActions';
import { reducer } from '../utils/reducers/formReducer';
import { signUp } from '../utils/actions/authActions';
import { getFirebaseApp } from '../utils/firebaseHelper';

const initialState = {
  inputValues: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  },
  inputValidities: {
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  },
  formisValid: false,
};

const SignUpForm = () => {
  const [formState, dispatchFormState] = useReducer(reducer, initialState);
  const inputchangeHandler = useCallback(
    (inputId, inputValue) => {
      const result = validateInput(inputId, inputValue);
      dispatchFormState({ inputId, validationResult: result, inputValue });
    },
    [dispatchFormState]
  );

  const authHandler = () => {
    signUp(
      formState.inputValues.firstName,
      formState.inputValues.lastName,
      formState.inputValues.email,
      formState.inputValues.password
    );
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
        errorText={formState.inputValidities['firstName']}
      />

      <Input
        id='lastName'
        label={'Last Name'}
        icon='user-o'
        autoCapitalize='none'
        iconPack={FontAwesome}
        iconSize={24}
        onInputChanged={inputchangeHandler}
        errorText={formState.inputValidities['lastName']}
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
        errorText={formState.inputValidities['email']}
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
        errorText={formState.inputValidities['password']}
      />
      <SubmitButton
        title='Sign Up'
        onPress={authHandler}
        style={{ marginTop: 20 }}
        disabled={!formState.formisValid}
      />
    </>
  );
};

export default SignUpForm;
