import React from "react";
import { AntDesign } from "@expo/vector-icons";

import * as S from "./styles";

const Swiping = ({ swiperRef }) => {
  return (
    <S.Swiping>
      <S.Accept
        onPress={() => {
          swiperRef.current.swipeRight();
        }}
      >
        <AntDesign name="check" size={22} style={{ color: "#fff" }} />
      </S.Accept>
      <S.Decline
        onPress={() => {
          swiperRef.current.swipeLeft();
        }}
      >
        <AntDesign name="close" size={22} style={{ color: "#fff" }} />
      </S.Decline>
    </S.Swiping>
  );
};

export default Swiping;
