import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import api from "../services/api";

const GlobalContext = createContext();

function useGlobalContext() {
  return useContext(GlobalContext);
}

const GlobalProvider = (props) => {
  const [pokemons, setPokemons] = useState([]);
  const [pokedex, setPokedex] = useState([]);
  const [listPokedex, setListPokedex] = useState([]);
  const [paginate, setPaginate] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get(`pokemon?limit=9&offset=${paginate}`)
      .then((response) => pokemonData(response.data.results));
  }, [paginate]);

  const pokemonData = async (data) => {
    const response = await Promise.all(
      data.map(async (pokemon) => {
        const pokemonRecord = await axios
          .get(pokemon.url)
          .then((response) => response.data);

        const image = `https://professorlotus.com/Sprites/${pokemon.name}.gif`;
        let pokedex = localStorage.getItem("pokedex")
          ? JSON.parse(localStorage.getItem("pokedex"))
          : [];
        pokedex.map((item) => {
          if (item.name === pokemonRecord.name) {
            console.log("opa", item.name, pokemonRecord.name);

            pokemonRecord.add = true;
          }
        });

        return {
          ...pokemonRecord,
          image,
        };
      })
    );
    setLoading(false);
    setPokemons([...response]);
  };

  return (
    <GlobalContext.Provider
      value={{
        pokemons,
        pokedex,
        listPokedex,
        paginate,
        loading,
        setLoading,
        setPaginate,
        setListPokedex,
        setPokemons,
        setPokedex,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
export { GlobalProvider, useGlobalContext };
