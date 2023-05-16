import { View, Pressable, Text, StyleSheet } from "react-native";

export const Menu = () => {
  const onPress = (prompt: string) => {
    console.log(prompt);
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={() => onPress("yn")}>
        <Text style={styles.text}>[Y/N]</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => onPress("inpt")}>
        <Text style={styles.text}>[INPT]</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => onPress("otpt")}>
        <Text style={styles.text}>[OTPT]</Text>
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
  button: {},
  text: {
    fontSize: 44,
    fontFamily: "Saira-BlackItalic",
    textTransform: "uppercase",
    color: "#3E2952",
  },
});
