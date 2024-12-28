import { Link } from "expo-router";
import { styled } from "nativewind";
import React, { useEffect, useRef } from "react";
import {
  Animated,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

const StyledPressable = styled(Pressable);

export function PokemonCard({ pokemon }) {
  return (
    <Link href={`/${pokemon.name}`} asChild>
      <StyledPressable className="active:opacity-60 mb-10 bg-gray-500/10 rounded-xl p-4 ">
        <View className="flex-row ">
          <Image style={styles.image} source={{ uri: pokemon.imageUrl }} />
          <View className="justify-center items-center">
            <Text style={styles.title}>{pokemon.name}</Text>
          </View>
        </View>
      </StyledPressable>
    </Link>
  );
}

export function AnimatedPokemonCard({ pokemon, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      delay: index * 200,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <PokemonCard pokemon={pokemon} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    alignItems: "center",
  },
  image: {
    width: 170,
    height: 170,
    borderRadius: 10,
  },
  title: {
    color: "#fff",
    fontSize: 25,
    marginTop: 8,
  },
});
