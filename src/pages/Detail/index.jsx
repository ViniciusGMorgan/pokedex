import React, { useEffect, useState } from "react";
import { GiBroadsword, GiPointySword } from "react-icons/gi";

import {
  BsFillArrowLeftCircleFill,
  BsHeart,
  BsShield,
  BsShieldShaded,
  BsSpeedometer2,
} from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import {
  Picture,
  Card,
  Container,
  StatsContainer,
  DetailsContainer,
  MovesContainer,
  ContainerButton,
  Button,
} from "./styled";
import api from "../../services/api";

const Detail = () => {
  const navigate = useNavigate();
  const [info, setInfo] = useState(null);

  const { name } = useParams();

  useEffect(() => {
    api.get(`/pokemon/${name}`).then((response) => {
      let detail = response.data;
      let pokemonPhoto;
      if (detail && detail.sprites.other.home.front_default) {
        pokemonPhoto = detail.sprites.other.home.front_default;
      } else if (detail && detail.sprites.front_default) {
        pokemonPhoto = detail.sprites.front_default;
      } else if (detail && detail.sprites.front_shiny) {
        pokemonPhoto = detail.sprites.front_shiny;
      }
      const renderMoves = detail?.moves?.map((move, i) => {
        return i < 5 && <p key={i}>{move.move.name}</p>;
      });
      setInfo({
        pokemonPhoto: pokemonPhoto,
        name: detail.name,
        renderMoves,
        stats: detail.stats,
      });
    });
  }, []);

  return (
    <>
      <ContainerButton>
        <Button onClick={() => navigate(-1)}>
          <BsFillArrowLeftCircleFill className="iconHome" />
        </Button>
      </ContainerButton>
      <Container>
        {info ? (
          <Card>
            <p className="title">{info.name}</p>
            <Picture src={info.pokemonPhoto} alt="" />
            <DetailsContainer>
              <StatsContainer>
                <h3>Status</h3>
                <div className="statsContainer">
                  <div>
                    <p>
                      <BsHeart />
                      <b>HP:</b> {info.stats[0].base_stat}
                    </p>
                    <p>
                      <GiBroadsword className="sword" />
                      <b>Ataque:</b> {info.stats[1].base_stat}
                    </p>
                    <p>
                      <BsShield />
                      <b>Defesa:</b> {info.stats[2].base_stat}
                    </p>
                  </div>
                  <div>
                    <p>
                      <GiPointySword />
                      <b>Ataque-Especial:</b> {info.stats[3].base_stat}
                    </p>
                    <p>
                      <BsShieldShaded />
                      <b>Defesa-Especial:</b> {info.stats[4].base_stat}
                    </p>
                    <p>
                      <BsSpeedometer2 />
                      <b>Velocidade:</b> {info.stats[5].base_stat}
                    </p>
                  </div>
                </div>
              </StatsContainer>
              <MovesContainer>
                <h3>Principais Habilidades</h3>
                {info.renderMoves}
              </MovesContainer>
            </DetailsContainer>
          </Card>
        ) : (
          <div className="loader"></div>
        )}
      </Container>
    </>
  );
};

export default Detail;
