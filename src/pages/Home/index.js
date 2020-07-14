import React from "react";
import * as S from "./styles";
import Header from "../../components/Header";
import Card from "../../components/Card";
import Tabbar from "../../components/Tabbar";

import { FontAwesome } from "@expo/vector-icons";

const Home = () => {
  return (
    <S.Container>
      <Header />

      <S.CardContainer>
        <Card />
      </S.CardContainer>

      <S.AddButton>
        <FontAwesome name="plus" size={25} color="#000" />
      </S.AddButton>
      <S.SearchButton>
        <FontAwesome name="search" size={25} />
      </S.SearchButton>

      <Tabbar />
    </S.Container>
  );
};

export default Home;
