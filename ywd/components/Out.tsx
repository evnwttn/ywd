import { useState, Dispatch, SetStateAction } from "react";
import { View, TextInput, Pressable, Text, StyleSheet } from "react-native";

interface OutProps {
  setDisplayComponent: Dispatch<SetStateAction<string | undefined>>;
}

export const Out = ({ setDisplayComponent }: OutProps) => {
  const [location, setLocation] = useState<string>("");

  const onSubmitLocation = () => {
    console.log(location);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="..."
        onChangeText={setLocation}
        value={location}
      />
      <Pressable onPress={onSubmitLocation}>
        <Text style={styles.text}>[GO]</Text>
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
