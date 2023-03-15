import { Tabs, useSegments } from "expo-router";
import { useMemo } from "react";

export default function AppLayout() {
  const segments = useSegments();

  console.log(segments);
  const nestedHomePageOpened = useMemo(() => {
    return (
      segments.length > 2 && segments[0] === "(root)" && segments[1] === "home"
    );
  }, [segments]);

  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          href: "/home",
          headerShown: !nestedHomePageOpened,
          tabBarStyle: nestedHomePageOpened ? { display: "none" } : {},
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
