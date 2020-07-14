import styled from "styled-components/native";
import { FontAwesome, Entypo } from "@expo/vector-icons";

export const Header = styled.View`
  width: 100%;
  height: 7%;
  top: 4%;
  flex-direction: column;
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  left: 6%;
  border-radius: 25px;
  border: 2px #5affd7;
`;

export const AvatarName = styled.View`
  width: 250px;
  margin-left: 22.5%;
  bottom: 37px;
  flex-direction: row;
`;

export const Name = styled.Text`
  font-size: 14px;
  color: #3a2a4f;
`;

export const Infos = styled.View`
  width: 100px;
  height: 15px;
  top: -30px;
  margin-left: 22.5%;
  flex-direction: row;
`;

export const InfoIcon = styled(FontAwesome)`
  color: #8140d8;
  margin-right: 10px;
  bottom: 5px;
  position: absolute;
`;

export const Info = styled.Text`
  left: 15px;
  bottom: 2px;
  font-size: 12px;
  color: #3a2a4f;
  flex-direction: row;
`;

export const DistanceInfo = styled.View`
  width: 100px;
  height: 15px;
  top: -45px;
  left: 170px;
  flex-direction: row;
`;

export const Distance = styled.Text`
  margin-left: 20px;
  font-size: 13px;
  bottom: 3px;
`;

export const PinIcon = styled(Entypo)`
  color: #8140d8;
  right: 80px;
  bottom: 3px;
  position: absolute;
`;
