import { NavigationContainer } from "@react-navigation/native";
import { View, Text } from "react-native";
import AppRouter from "./src/routes/AppRouter";

export default function App() {
  return (
    <NavigationContainer>
      <AppRouter />
    </NavigationContainer>
  );
}
