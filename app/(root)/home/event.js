import { StyleSheet, Text, View } from "react-native";
import { useRouter, Stack } from "expo-router";

export default function Page() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Overview", headerShown: true }} />
      <View style={styles.main}>
        <Text>Event page</Text>
        <Text onPress={() => router.back()}>Go back</Text>
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
