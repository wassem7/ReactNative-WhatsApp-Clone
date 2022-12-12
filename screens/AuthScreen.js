import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import PageContainer from '../components/PageContainer';
import SignUpForm from '../components/SignUpForm';
import SignInForm from '../components/SignInForm';
import colors from '../constants/colors';
import logo from '../assets/images/SEEMZYGRAM-LOGO.png';
const AuthScreen = () => {
  const [isSignUp, setisSignUp] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PageContainer>
        <ScrollView>
          <KeyboardAvoidingView keyboardVerticalOffset={100}>
            <View style={styles.imagecontainer}>
              <Text
                style={{
                  fontFamily: 'seemzygram',
                  padding: 70,
                  margin: 10,
                  fontSize: 30,
                  color: colors.primary,
                  letterSpacing: 1.5,
                  width: '100%',
                }}
              >
                Seemzygram
              </Text>
              {/* <Image style={styles.image} source={logo} resizeMode='contain' /> */}
            </View>
            {isSignUp ? <SignUpForm /> : <SignInForm />}
            <TouchableOpacity
              style={styles.linkcontainer}
              onPress={() => setisSignUp((prevState) => !prevState)}
            >
              <Text style={styles.link}>{`Switch to ${
                isSignUp ? 'Login' : 'Sign Up'
              }`}</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </ScrollView>
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
  imagecontainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '50%',
  },
});
export default AuthScreen;
