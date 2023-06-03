import { useState, Dispatch, SetStateAction } from "react";
import { View, Pressable, Text, TextInput, StyleSheet } from "react-native";

interface InProps {
  setDisplayComponent: Dispatch<SetStateAction<string | undefined>>;
}

export const In = ({ setDisplayComponent }: InProps) => {
  const [inputText, onInputText] = useState<string>("");
  const [inputArray, setInputArray] = useState<string[]>([]);
  const [inputOutput, setInputOutput] = useState<string | undefined>();

  const onSubmitInput = () => {
    const updatedArray = [...inputArray, inputText];
    setInputArray(updatedArray);
    onInputText("");
  };

  const onSubmitArray = () => {
    setInputOutput(inputArray[Math.floor(Math.random() * inputArray.length)]);
  };

  const toggleMenu = () => {
    setDisplayComponent("");
  };

  return (
    <View style={styles.container}>
      {inputOutput ? (
        <Pressable style={styles.plus} onPress={toggleMenu}>
          <Text style={styles.text}>{inputOutput}</Text>
        </Pressable>
      ) : (
        <>
          <Pressable style={styles.plus} onPress={onSubmitArray}>
            <Text style={styles.text}>[GO]</Text>
          </Pressable>
          <TextInput
            style={styles.input}
            placeholder="..."
            onChangeText={onInputText}
            value={inputText}
          />
          <Pressable onPress={onSubmitInput}>
            <Text style={styles.text}>[++]</Text>
          </Pressable>
        </>
      )}
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
