import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { useFonts } from 'expo-font';
import HomeScreen from './screens/Home';
import DoctorsScreen from './screens/Doctors';
import SignUpScreen from './screens/SignUp';
import SignInScreen from './screens/SignIn';
import ProfileScreen from './screens/Profile';

const Stack = createStackNavigator();

export default function App() {


  const [loaded] = useFonts({
    NotoFont: require('./assets/fonts/NotoKufiArabic-Regular.ttf'),
  })

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#007bff',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            textAlign: 'right',
            fontFamily: 'NotoFont'
          }
        }}
      >
        <Stack.Screen 
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Doctors"
          component={DoctorsScreen}
          options={{
            title: 'الأطباء'
          }}
        />
        <Stack.Screen 
          name="SignUp"
          component={SignUpScreen}
          options={{
            title: 'حساب جديد'
          }}
        />
        <Stack.Screen 
          name="SignIn"
          component={SignInScreen}
          options={{
            title: 'تسجيل الدخول'
          }}
        />
        <Stack.Screen 
          name="Profile"
          component={ProfileScreen}
          options={{
            title: 'الملف الشخصي'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

