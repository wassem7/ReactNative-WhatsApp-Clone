import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { Button, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useCallback, useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// SCREENS
import ChatListScreen from './screens/ChatListScreen';
import ChatSettingsScreen from './screens/ChatSettingsScreen';
import SettingsScreen from './screens/SettingsScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='chatlist'
        component={ChatListScreen}
        options={{ tabBarLabel: 'Chats' }}
      />
      <Tab.Screen
        name='settings'
        component={SettingsScreen}
        options={{ tabBarLabel: 'Settings' }}
      />
    </Tab.Navigator>
  );
};
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [AppIsLoaded, setAppIsLoaded] = useState(false);
  useEffect(() => {
    //Load fonts
    const prepare = async () => {
      try {
        await Font.loadAsync({
          'Black': require('./assets/fonts/Roboto-Black.ttf'),
          'blackItalic': require('./assets/fonts/Roboto-BlackItalic.ttf'),
          'bold': require('./assets/fonts/Roboto-Bold.ttf'),
          'boldItalic': require('./assets/fonts/Roboto-BoldItalic.ttf'),
          'italic': require('./assets/fonts/Roboto-Italic.ttf'),
          'light': require('./assets/fonts/Roboto-Light.ttf'),
          'lightItalic': require('./assets/fonts/Roboto-LightItalic.ttf'),
          'medium': require('./assets/fonts/Roboto-Medium.ttf'),
          'mediumItalic': require('./assets/fonts/Roboto-MediumItalic.ttf'),
          'regular': require('./assets/fonts/Roboto-Regular.ttf'),
          'thin': require('./assets/fonts/Roboto-Thin.ttf'),
          'thinItalic': require('./assets/fonts/Roboto-ThinItalic.ttf'),
        });
      } catch (error) {
        console.log(error);
      } finally {
        setAppIsLoaded(true);
      }
    };

    prepare();
  }, []);
  const onlayout = useCallback(async () => {
    if (AppIsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [AppIsLoaded]);

  if (!AppIsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider style={styles.container} onLayout={onlayout}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='home'
            component={TabNavigator}
            options={{
              headerTitle: () => (
                <Text style={{ fontSize: 20, fontFamily: 'bold' }}>
                  SEEMZYGRAM
                </Text>
              ),
              headerShadowVisible: false,
            }}
          />
          <Stack.Screen
            name='chatsettings'
            component={ChatSettingsScreen}
            options={{
              gestureEnabled: true,
              headerTitle: 'Settings',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
