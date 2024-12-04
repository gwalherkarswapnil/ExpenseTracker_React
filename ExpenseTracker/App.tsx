import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screen/LoginScreen'; // Import the LoginScreen
const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Define the Login screen */}
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ title: 'Login' }} 
        />
        {/* Add more screens here in the future */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
