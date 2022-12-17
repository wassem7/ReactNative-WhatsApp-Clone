import React, { useCallback, useReducer } from 'react';
import Input from './Input';
import { Feather } from '@expo/vector-icons';
import SubmitButton from './SubmitButton';
import { validateInput } from '../utils/actions/formActions';
import { reducer } from '../utils/reducers/formReducer';

const initialState = {
  inputValidities: {
    email: false,
    password: false,
  },
  formisValid: false,
};

const SignInForm = () => {
  const [formState, dispatchFormState] = useReducer(reducer, initialState);
  const inputchangeHandler = useCallback(
    (inputId, inputValue) => {
      const result = validateInput(inputId, inputValue);
      dispatchFormState({ inputId, validationResult: result });
    },
    [dispatchFormState]
  );

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
        errorText={formState.inputValidities['email']}
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
        errorText={formState.inputValidities['password']}
      />
      <SubmitButton
        title='Sign In'
        onPress={() => console.log('Button Pressed !')}
        style={{ marginTop: 20 }}
        disabled={!formState.formisValid}
      />
    </>
  );
};

export default SignInForm;
