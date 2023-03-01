import React, { useEffect, useState } from "react";
import { useToasts } from "react-toast-notifications";
import Cards from "../../components/Cards";
import { useGlobalContext } from "../../contexts/Global";

const Pokedex = () => {
  const { pokemons, setPokemons } = useGlobalContext();
  const { addToast } = useToasts();

  let pokedex = localStorage.getItem("pokedex")
    ? JSON.parse(localStorage.getItem("pokedex"))
    : [];
  const [listPokedex, setListPokedex] = useState(pokedex);

  useEffect(() => {
    localStorage.setItem("pokedex", JSON.stringify(listPokedex));
  }, [listPokedex]);

  const handleRemove = (pokemon) => {
    const newList = listPokedex.filter((item) => {
      return item.name !== pokemon.name;
    });
    const newPokemons = pokemons.map((item) => {
      if (item.name === pokemon.name) {
        item.add = false;
        addToast("Pokemon removido na sua pokedex!", { appearance: "success" });
      }
      return item;
    });
    setPokemons([...newPokemons]);
    setListPokedex([...newList]);
  };

  return (
    <Cards
      pokemons={listPokedex}
      handlePokemon={handleRemove}
      textButton={"Remover"}
    ></Cards>
  );
};

export default Pokedex;
