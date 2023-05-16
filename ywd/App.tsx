import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { useFonts } from "expo-font";

export const Menu = () => {
  return <Text style={styles.text}>Hello</Text>;
};

export default function App() {
  const [viewSplash, toggleViewSplash] = useState<boolean>(true);

  const [fontsLoaded] = useFonts({
    "Saira-BlackItalic": require("./assets/fonts/Saira-BlackItalic.ttf"),
  });

  const onPress = () => {
    toggleViewSplash(!viewSplash);
  };

  return (
    <View style={styles.container}>
      {viewSplash ? (
        <Pressable style={styles.button} onPress={onPress}>
          <Text style={styles.text}>ywd</Text>
        </Pressable>
      ) : (
        <Menu />
      )}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage: "linear-gradient(#DF8B60, #BC859C)",
    backgroundColor: "#DF8B60",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {},
  text: {
    fontSize: 44,
    fontFamily: "Saira-BlackItalic",
    textTransform: "uppercase",
    color: "#3E2952",
  },
});
