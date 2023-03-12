import { StyleSheet, Text, View } from "react-native";
import { useAuth } from "../../context/auth";

export default function Page() {
  const { signOut } = useAuth();
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text>Settings tab</Text>
        <Text onPress={signOut} style={styles.logout}>
          Logout
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  logout: {
    color: "#007AFF",
    marginTop: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
});
