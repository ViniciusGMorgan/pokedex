import React from "react";
import { useNavigate } from "react-router-dom";
import { Image, ContainerHeader } from "./styled";
import pokedex from "../../assets/pokedex.png";
import logo from "../../assets/logo.png";

const Header = () => {
  const navigate = useNavigate();

  return (
    <ContainerHeader>
      <Image src={logo} onClick={() => navigate("/")} />
      <Image src={pokedex} onClick={() => navigate("/pokedex")}></Image>
    </ContainerHeader>
  );
};
export { Header };
