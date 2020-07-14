import React from "react";
import { FontAwesome } from "@expo/vector-icons";

import * as S from "./styles";

const Empty = () => {
  return (
    <S.Stared style={{ backgroundColor: "#fff" }}>
      <S.Text style={{ color: "#3a2a4f" }}>Lorem Ipsum</S.Text>
    </S.Stared>
  );
};

export default Empty;
