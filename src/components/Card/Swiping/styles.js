import styled from "styled-components/native";

export const Swiping = styled.View`
  width: 80px;
  height: 150px;
  right: 0;
  top: 3px;
  flex-direction: column;
  background-color: transparent;
  align-items: center;
  align-self: center;
  z-index: 1;
  position: absolute;
`;

export const Accept = styled.TouchableOpacity`
  top: 3px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: #1fb893;
  position: absolute;
  align-items: center;
  z-index: 2;
  justify-content: center;
  align-items: center;
`;

export const Decline = styled.TouchableOpacity`
  top: 55px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: #f23870;
  position: absolute;
  z-index: 2;
  justify-content: center;
  align-items: center;
`;
