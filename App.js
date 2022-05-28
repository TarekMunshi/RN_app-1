import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import { StyleSheet, StatusBar } from 'react-native';
import Text from './src/components/text/text';
import Details from './src/screens/HomeScreen/Details/Details';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';

export default function App() {
  const [loaded] = useFonts({
    'Antonio-Medium': require('./assets/fonts/Antonio-Medium.ttf'),
    'Spartan-Bold': require('./assets/fonts/LeagueSpartan-Bold.ttf'),
    'Spartan-Regular': require('./assets/fonts/LeagueSpartan-Regular.ttf'),
  });

  if (!loaded) {
    return (
      <Text>Font Is Loading....</Text>
    )
  }
  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#00BCD4" translucent={true} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
