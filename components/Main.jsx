import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList } from "react-native";
import { getLatestPokemons } from "../lib/pokemons";
import { AnimatedPokemonCard } from "./PokemonCard";
import { Screen } from "./Screen";

export function Main() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getLatestPokemons().then((pokemons) => {
      Promise.all(pokemons).then((allPokemons) => {
        setPokemons(allPokemons);
      });
    });
  }, []);
  return (
    <Screen>
      {pokemons.length === 0 ? (
        <ActivityIndicator size={"large"} />
      ) : (
        <FlatList
          data={pokemons}
          keyExtractor={(pokemon) => pokemon.id}
          renderItem={({ item, index }) => (
            <AnimatedPokemonCard pokemon={item} index={index} />
          )}
        />
      )}
    </Screen>
  );
}
