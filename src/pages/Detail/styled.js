import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Picture = styled.img`
  width: 200px;
  position: relative;
`;

export const Card = styled.div`
  display: flex;
  background-color: #fff;
  flex-direction: column;
  align-items: center;
  border: 1px solid #386abb;
  border-radius: 20px;
  justify-content: space-around;
  box-shadow: 2px 2px 2px grey;
  padding: 0px 20px;
  .title {
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  width: 100%;
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

export const StatsContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 10px;
  margin-top: 50px;
  h3 {
    width: 100%;
    color: gray;
    border-bottom: 2px solid gray;
    margin-bottom: 10px;
  }
  .sword {
    transform: rotate(180deg);
  }
  .statsContainer {
    display: flex;
    flex-direction: row;
    div {
      margin: 5px 10px;
      @media screen and (max-width: 856px) {
        margin: 0 10px;
      }
      p {
        display: flex;
        align-items: center;
        margin: 5px;
        b {
          margin: 0 3px;
        }
      }
    }
    @media screen and (max-width: 856px) {
      flex-direction: column;
    }
  }
`;

export const MovesContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 10px;
  margin-top: 50px;
  width: 35%;
  h3 {
    color: gray;
    border-bottom: 2px solid gray;
    margin-bottom: 10px;
  }
  p {
    margin: 2px 10px;
    font-weight: 500;
    border-bottom: 1px solid whitesmoke;
  }
  @media screen and (max-width: 700px) {
    width: 100%;
    margin-top: 5px;
  }
`;
export const ContainerButton = styled.div`
  display: flex;
  margin-top: 20px;
  height: 50px;
  .iconHome {
    color: #ffcc03;
    font-size: 50px;
  }
`;

export const Button = styled.div`
  position: relative;
  right: 30px;
  color: #386abb;
  border-radius: 50px;
  font-size: 0.8em;
  margin-left: 5em;
  cursor: pointer;
  font-weight: bold;
  transition: transform 0.9s;
  :hover {
    background-color: transparent;
    box-shadow: 0 0 4px 0 #386abb inset, 0 0 4px 2px #386abb;
    height: 50px;
  }
`;
