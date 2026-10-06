import { StyleSheet, Text, View } from "react-native";

interface StopwatchProps {
  seconds: number;
  isRunning: boolean;
}

export default function Stopwatch({ seconds, isRunning }: StopwatchProps) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const formattedTime =
    `${minutes.toString().padStart(2, "0")}:` +
    `${remainingSeconds.toString().padStart(2, "0")}`;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lab Stopwatch</Text>

      <Text style={styles.timer}>{formattedTime}</Text>

      {isRunning ? (
        <Text style={styles.status}>Running...</Text>
      ) : (
        <Text style={styles.status}>Paused</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: "#eeeeee",
    alignItems: "center",
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },

  timer: {
    fontSize: 42,
    fontWeight: "bold",
    marginBottom: 10,
  },

  status: {
    fontSize: 18,
  },
});
