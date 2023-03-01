import React from "react";
import { useGlobalContext } from "../../contexts/Global";
import Cards from "../../components/Cards";
import { useToasts } from "react-toast-notifications";

export default function Home() {
  const { addToast } = useToasts();

  const { pokemons, paginate, setPaginate, setPokemons, loading } =
    useGlobalContext();
  let pokedex = localStorage.getItem("pokedex")
    ? JSON.parse(localStorage.getItem("pokedex"))
    : [];

  const addPokemon = (pokemon) => {
    const index = pokedex.findIndex((item) => {
      return item.name === pokemon.name;
    });

    if (index === -1) {
      pokedex.push(pokemon);
      localStorage.setItem("pokedex", JSON.stringify(pokedex));

      const newList = pokemons.map((item) => {
        if (item.name === pokemon.name) {
          item.add = true;
        }
        return item;
      });
      addToast("Pokemon capturado. Confira na sua pokedex!", {
        appearance: "success",
      });

      setPokemons([...newList]);
    } else {
      addToast("Este pokemon já está na sua pokedex!", { appearance: "error" });
    }
  };

  return !loading ? (
    <Cards
      paginate={paginate}
      setPaginate={setPaginate}
      pokemons={pokemons}
      handlePokemon={addPokemon}
      textButton={"Adicionar"}
    ></Cards>
  ) : (
    <div className="loader"></div>
  );
}
