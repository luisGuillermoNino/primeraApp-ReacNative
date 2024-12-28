export async function getLatestPokemons() {
  const POKEMONS_URL = "https://pokeapi.co/api/v2/pokemon?limit=15&offset=0";

  const rawData = await fetch(POKEMONS_URL);
  const json = await rawData.json();

  return json.results.map((pokemon) => {
    const { name, url } = pokemon;

    return getPokemonDetailsFromUrl(url).then((details) => {
      const { id, sprites, types } = details;
      const imageUrl = sprites.front_default;
      const typesList = types.map((typeObj) => typeObj.type.name);
      return {
        id,
        name,
        imageUrl,
        types: typesList,
      };
    });
  });
}

export async function getPokemonDetailsFromUrl(url) {
  const rawData = await fetch(url);
  const json = await rawData.json();
  const { id, sprites, types } = json;
  return { id, sprites, types };
}
