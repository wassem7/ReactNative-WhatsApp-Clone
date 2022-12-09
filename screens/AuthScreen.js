import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import PageContainer from '../components/PageContainer';
import Input from '../components/Input';
import { FontAwesome } from '@expo/vector-icons';

const AuthScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PageContainer>
        <Input
          label={'First Name'}
          icon='user-o'
          iconPack={FontAwesome}
          iconSize={24}
        />
      </PageContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
export default AuthScreen;
