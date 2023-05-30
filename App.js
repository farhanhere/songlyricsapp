import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StatusBar } from "expo-status-bar";
import { Start } from "./screens/Start";
import { Login } from "./screens/Login";
import { Signup } from "./screens/Signup";
import { Home } from "./screens/Home";


const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
         
        <Stack.Screen name="Start" component={Start} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: true }} />
        
      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default MyStack;