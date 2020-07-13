import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";

export const Container = styled.View`
  position: absolute;

  height: 20px;
  left: 30px;
  top: 30px;
  flex-direction: row;
  align-items: center;
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
