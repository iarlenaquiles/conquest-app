import React from "react";

import * as S from "./styles";

const CardHeader = ({ avatar, name, info, distance }) => {
  return (
    <S.Header>
      <S.Avatar source={{ uri: avatar }} />

      <S.AvatarName>
        <S.Name>{name}</S.Name>
      </S.AvatarName>

      <S.Infos>
        <S.InfoIcon name="info-circle" size={10} />
        <S.Info>{info}</S.Info>
      </S.Infos>

      <S.DistanceInfo>
        <S.PinIcon name="location-pin" size={10} />
        <S.Distance>
          {distance}
          Km
        </S.Distance>
      </S.DistanceInfo>
    </S.Header>
  );
};

export default CardHeader;
