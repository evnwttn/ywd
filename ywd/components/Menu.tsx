import { Dispatch, SetStateAction } from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";

interface MenuProps {
  setDisplayComponent: Dispatch<SetStateAction<string | undefined>>;
}

export const Menu = ({ setDisplayComponent }: MenuProps) => {
  const onPress = (prompt: string) => {
    setDisplayComponent(prompt);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={() => onPress("Y/N")}>
        <Text style={styles.text}>[Y/N]</Text>
      </Pressable>
      <Pressable onPress={() => onPress("IN*")}>
        <Text style={styles.text}>[IN*]</Text>
      </Pressable>
      <Pressable onPress={() => onPress("OUT")}>
        <Text style={styles.text}>[OUT]</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage: "linear-gradient(#DF8B60, #BC859C)",
    backgroundColor: "#DF8B60",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 44,
    fontFamily: "Saira-BlackItalic",
    textTransform: "uppercase",
    color: "#3E2952",
  },
});
