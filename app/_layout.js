import { Link, Stack } from "expo-router";
import { Pressable, View } from "react-native";
import { CircleInfo } from "../components/Icons";
import { Logo } from "../components/Logo";

export default function Layout() {
  return (
    <View className="flex-1">
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "white",
          headerTitle: "",
          headerLeft: () => <Logo />,
          headerRight: () => (
            <Link asChild href="/about">
              <Pressable>
                <CircleInfo />
              </Pressable>
            </Link>
          ),
        }}
      />
    </View>
  );
}
