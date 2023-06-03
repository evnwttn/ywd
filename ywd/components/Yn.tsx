import { Dispatch, SetStateAction } from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";

interface YnProps {
  setDisplayComponent: Dispatch<SetStateAction<string | undefined>>;
}

export const Yn = ({ setDisplayComponent }: YnProps) => {
  const yn: string[] = ["yes", "no"];
  const ynDisplay: string = yn[Math.floor(Math.random() * yn.length)];

  const toggleMenu = () => {
    setDisplayComponent("");
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={() => toggleMenu()}>
        <Text style={styles.text}>{ynDisplay}</Text>
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
