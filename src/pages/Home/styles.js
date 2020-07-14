import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #4a1592;
`;

export const CardContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 5;
`;

export const AddButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: #fff;
  position: absolute;
  border: 2px;
  bottom: 70px;
  left: 4%;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const SearchButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: #5affd7;
  position: absolute;
  bottom: 70px;
  border: 2px;
  right: 4%;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;
