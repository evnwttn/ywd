import { View, Pressable, Text, StyleSheet } from "react-native";

interface OutProps {
  setDisplayComponent: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export const Out = ({ setDisplayComponent }: OutProps) => {
  const onPress = (prompt: string) => {
    console.log(prompt);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={() => onPress("Out")}>
        <Text style={styles.text}>Out</Text>
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
