import { StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";

export default function Page() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text>Home tab</Text>
        <Text onPress={() => router.push("/home/event")}>Open a card</Text>
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
});
