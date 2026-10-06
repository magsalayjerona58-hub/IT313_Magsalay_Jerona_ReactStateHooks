import { Button, StyleSheet, Text, View } from "react-native";

interface PracticeTrackerProps {
  solved: number;
  onSolve: () => void;
  onReset: () => void;
}

export default function PracticeTracker({
  solved,
  onSolve,
  onReset,
}: PracticeTrackerProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Practice Tracker</Text>

      <Text style={styles.solved}>Solved: {solved}</Text>

      <View style={styles.button}>
        <Button title="Solve +1" onPress={onSolve} />
      </View>

      <View style={styles.button}>
        <Button title="Reset" onPress={onReset} />
      </View>

      {solved >= 5 && <Text style={styles.greatJob}>Great job!</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
  },

  solved: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 15,
  },

  button: {
    marginVertical: 5,
  },

  greatJob: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 15,
  },
});
