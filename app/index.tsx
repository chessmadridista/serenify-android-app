import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.view}
    >
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>I want to share something ✍️</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: '#1976d3',
    padding: 10,
    borderRadius: 10
  },
  buttonText: {
    color: 'white'
  }
})