import { Text, View, StyleSheet } from "react-native";
import { useAuth } from "../../context/auth";

export default function SignIn() {
  const { signIn } = useAuth();
  return (
    <View style={styles.container}>
      <Text style={styles.login} onPress={() => signIn()}>
        Sign In
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  login: {
    color: "#007AFF",
    fontWeight: "bold",
    textAlign: "center",
  },
});
