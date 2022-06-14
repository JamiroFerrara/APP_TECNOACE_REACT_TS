import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, StatusBar } from "native-base";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { View } from "native-base";
import theme, { colors } from "./src/theme";

import Login from "./src/pages/login-page";
import Impianti from "./src/pages/impianti-page";
import Detail from "./src/pages/detail-page";
import Weather from "./src/pages/weather-page";
import LinearGradient from 'expo-linear-gradient'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={colors.primary[900]} />
      <NativeBaseProvider theme={theme} config={config}>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerTitleAlign: "center",
            cardShadowEnabled: true,
            gestureDirection: "horizontal",
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
            headerMode: "float",
            cardStyle: { backgroundColor: colors.primary[900] },
            header: () => {
              return <View />;
            },
          }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Impianti" component={Impianti} />
          <Stack.Screen name="Detail" component={Detail} />
          <Stack.Screen name="Weather" component={Weather} />

        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

const config = {
  dependencies: {
    "linear-gradient": LinearGradient
  }
};

export default App;
