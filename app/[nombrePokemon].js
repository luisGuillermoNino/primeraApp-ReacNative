import { Link, Stack, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import { Screen } from "../components/Screen";

export default function Detail() {
  const { nombrePokemon } = useLocalSearchParams();

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "white",
          headerLeft: () => {},
          headerTitle: "Nombre pokemon",
          headerRight: () => {},
        }}
      />
      <View>
        <Text className="text-white font-bold mb-8 text-2xl">
          Detalles del pokemon {nombrePokemon}
        </Text>
        <Link href="/" className="text-blue-500">
          Volver atras
        </Link>
      </View>
    </Screen>
  );
}
