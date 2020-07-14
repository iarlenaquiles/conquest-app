import React from "react";
import * as S from "./styles";
import Header from "../../components/Header";
import Card from "../../components/Card";

const Home = () => {
  return (
    <S.Container>
      <Header />

      <S.CardContainer>
        <Card />
      </S.CardContainer>
    </S.Container>
  );
};

export default Home;
