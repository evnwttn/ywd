import { useState, Dispatch, SetStateAction } from "react";
import { View, Pressable, Text, TextInput, StyleSheet } from "react-native";

interface InProps {
  setDisplayComponent: Dispatch<SetStateAction<string | undefined>>;
}

export const In = ({ setDisplayComponent }: InProps) => {
  const [textInput, onChangeTextInput] = useState<string>("");

  return (
    <View style={styles.container}>
      <Pressable style={styles.plus} onPress={() => console.log(textInput)}>
        <Text style={styles.text}>[GO]</Text>
      </Pressable>
      <TextInput
        style={styles.input}
        onChangeText={onChangeTextInput}
        value={textInput}
        placeholder="..."
      />
      <Pressable onPress={() => console.log(textInput)}>
        <Text style={styles.text}>[++]</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 300,
    padding: 2,
    fontFamily: "Saira-Black",
    textTransform: "uppercase",
    fontSize: 44,
    color: "#3E2952",
    borderColor: "#3E2952",
    borderWidth: 7,
    transform: [{ skewX: "15deg" }],
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 44,
    fontFamily: "Saira-BlackItalic",
    textTransform: "uppercase",
    color: "#3E2952",
  },
  go: {},
  plus: {},
});
