import { Tabs } from "expo-router";

export default function AppLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          href: "/home",
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          href: "/calendar",
        }}
      />
      <Tabs.Screen
        name="cards"
        options={{
          href: "/cards",
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          href: "/settings",
        }}
      />
    </Tabs>
  );
}
