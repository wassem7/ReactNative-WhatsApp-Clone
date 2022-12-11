import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import PageContainer from '../components/PageContainer';
import SignUpForm from '../components/SignUpForm';
import SignInForm from '../components/SignInForm';
import colors from '../constants/colors';

const AuthScreen = () => {
  const [isSignUp, setisSignUp] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PageContainer>
        {isSignUp ? <SignUpForm /> : <SignInForm />}
        <TouchableOpacity
          style={styles.linkcontainer}
          onPress={() => setisSignUp((prevState) => !prevState)}
        >
          <Text style={styles.link}>{`Switch to ${
            isSignUp ? 'Login' : 'Sign Up'
          }`}</Text>
        </TouchableOpacity>
      </PageContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  linkcontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
  },
  link: {
    fontFamily: 'medium',
    color: colors.blue,
  },
});
export default AuthScreen;
