import React from "react";

import * as S from "./styles";

const CardFooter = ({ description }) => {
  return (
    <S.Footer>
      <S.Title>Lorem Ipsum</S.Title>
      <S.Description numberOfLines={3}>{description}</S.Description>
    </S.Footer>
  );
};

export default CardFooter;
