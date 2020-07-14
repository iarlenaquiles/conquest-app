import React from "react";
import { FontAwesome } from "@expo/vector-icons";

import * as S from "./styles";

const Starred = () => {
  return (
    <S.Stared
      style={{
        backgroundColor: "#8140D8",
        borderColor: "#8140D8"
      }}
    >
      <FontAwesome name="star" size={13} color="#5AFFD7" />
      <S.Text style={{ color: "#5AFFD7", marginLeft: 5 }}>Lorem Ipsum</S.Text>
    </S.Stared>
  );
};

export default Starred;
