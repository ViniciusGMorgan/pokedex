import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  ContainerCards,
  Picture,
  ContainerButton,
  Container,
  Pagination,
  Article,
  TextAdd,
} from "./styled";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

export default function Cards(props) {
  const { paginate, setPaginate, pokemons, handlePokemon, textButton } = props;
  const navigate = useNavigate();

  return (
    <Container>
      {paginate !== undefined && (
        <ContainerButton>
          <Pagination
            onClick={() => setPaginate(paginate >= 9 ? paginate - 9 : paginate)}
          >
            <BsFillArrowLeftCircleFill className="iconHome" />
          </Pagination>
        </ContainerButton>
      )}
      <ContainerCards>
        {pokemons.length ? (
          pokemons.map((list) => (
            <Article key={list.name}>
              <p className="title">{list.name}</p>
              <Picture src={list.image} alt={list.name} />
              <ContainerButton>
                {list.add ? (
                  <TextAdd>Já capturado!</TextAdd>
                ) : (
                  <Button onClick={() => handlePokemon(list)}>
                    {textButton}
                  </Button>
                )}
                <Button
                  key={list.id}
                  onClick={() => navigate(`/detalhes/${list.name}`)}
                >
                  Detalhes
                </Button>
              </ContainerButton>
            </Article>
          ))
        ) : (
          <h4 style={{ color: "#fff" }}>Nenhum pokemon encontrado!</h4>
        )}
      </ContainerCards>
      {paginate !== undefined && (
        <ContainerButton>
          <Pagination onClick={() => setPaginate(paginate + 9)}>
            <BsFillArrowRightCircleFill className="iconHome" />
          </Pagination>
        </ContainerButton>
      )}
    </Container>
  );
}
