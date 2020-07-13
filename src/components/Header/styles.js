import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";

export const Container = styled.View`
  position: absolute;
  height: 14px;
  left: 34px;
  top: 29px;
  right: 0;
  flex-direction: row;
  align-items: center;
  z-index: 1;
`;

export const Text = styled.Text`
  font-size: 14px;
  color: #5affd7;
  flex-direction: row;
`;

export const Icon = styled(FontAwesome)`
  color: #5affd7;
  margin-right: 10px;
`;
