import { NavigationContainer } from "@react-navigation/native";
import { View, Text } from "react-native";
import AppRouter from "./src/routes/AppRouter";
import { ThemeProvider } from "styled-components";

export default function App() {
  const cores = {
    bg: "#121212",
    color: "#f3f3f3",
    tamanho: 54,
  };

  return (
    <ThemeProvider theme={cores}>
      <NavigationContainer>
        <AppRouter />
      </NavigationContainer>
    </ThemeProvider>
  );
}
