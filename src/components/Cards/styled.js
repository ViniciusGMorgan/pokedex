import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;

export const ContainerCards = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  grid-gap: 40px;
  width: 100%;
  margin: 0 auto;
`;

export const Button = styled.div`
  display: flex;
  border-radius: 10em;
  width: 100px;
  background-color: #ffcc03;
  margin: 0.5em;
  padding: 0.5em;
  font-weight: bold;
  color: #386abb;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.5s;
  :hover {
    background-color: #386abb;
    color: white;
    transform: scale(1.1);
  }
`;

export const Picture = styled.img`
  width: 100px;
  height: 150px;
  @media only screen and (max-width: 510px) {
    width: 70px;
    height: 80px;
  }
`;

export const Article = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #386abb;
  padding: 15px;
  border-radius: 20px;
  justify-content: space-around;
  box-shadow: 1px 1px 1px #fff;
  background-color: #fff;
  min-width: 200px;
  .title {
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
  }

  @media only screen and (max-width: 510px) {
    padding: 3px;
  }
`;
export const ContainerButton = styled.div`
  display: flex;
  .iconHome {
    color: #ffcc03;
    font-size: 50px;
  }
  @media only screen and (max-width: 510px) {
    flex-direction: column;
  }
`;

export const Pagination = styled.div`
  color: #386abb;
  border-radius: 50px;
  font-size: 0.8em;
  margin: 0 10px;
  cursor: pointer;
  font-weight: bold;
  transition: transform 0.9s;
  :hover {
    background-color: transparent;
    box-shadow: 0 0 4px 0 #386abb inset, 0 0 4px 2px #386abb;
    height: 50px;
  }
`;

export const TextAdd = styled.span`
  width: 100px;
  margin-left: 1em;
  padding: 0.5em;
  font-weight: bold;
  color: #386abb;
  display: flex;
  justify-content: center;
  align-items: center;
`;
