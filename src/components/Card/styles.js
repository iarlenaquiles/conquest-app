import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 0.91;
  border-radius: 24px;
  background-color: #fff;
`;

export const CompanyName = styled.Text`
  font-size: 14px;
`;

export const Text = styled.Text`
  color: #fff;
  font-size: 14px;
  line-height: 20px;
  padding: 1px;
  margin: auto;
`;

export const Stared = styled.View`
  border: 1px;
  margin-top: 2%;
  margin-left: 1%;
  border: 2px #3a2a4f;
  padding: 2px;
  border-radius: 4px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #3a2a4f;
`;

export const Body = styled.View`
  width: 100%;
  height: 55%;
  top: 7.5%;
  left: 0;
  flex-direction: column;
  border: 1px rgba(0, 0, 0, 0.03);
  background-color: rgba(129, 64, 216, 0.03);
`;

export const HighlightsView = styled.View`
  flex: 1;
  width: 95%;
  height: 80%;
  margin-left: 2.5%;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
`;

export const ContainerBody = styled.View`
  width: 100%;
  height: 49%;
`;

export const List = styled.View`
  width: 95%;
  height: 80%;
  margin-left: 2.5%;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
`;

export const BottomView = styled.View`
  width: 100%;
  height: 50%;
  top: 1%;
`;

export const Separate = styled.View`
  width: 90%;
  left: 5%;
  height: 1%;
  top: 0.5%;
  border: 2px rgba(0, 0, 0, 0.03);
  border-radius: 24px;
`;

export const Title = styled.Text`
  font-size: 14px;
  left: 6%;
  margin-top: 2%;
  z-index: 10;
`;

export const BottomButtonView = styled.View`
  width: 100px;
  height: 30px;
  bottom: 0;
  flex-direction: column;
  background-color: transparent;
  align-self: center;
`;

export const ButtonText = styled.Text`
  font-size: 14px;
  margin-left: 20px;
  margin-top: 10px;
  text-decoration-color: #8140d8;
  color: #8140d8;
`;

export const SwiperBackground = styled.View`
  width: 100%;
  height: 90%;
  border-radius: 20px;
  background-color: #fff;
  opacity: 0.85;
  align-items: center;
  align-self: center;
`;

export const SwiperClose = styled.View`
  position: absolute;
  z-index: 2;
  top: 25%;
  right: 25%;
  width: 40%;
  height: 20px;
  border-radius: 10px;
  background-color: #f23870;
  justify-content: center;
  align-items: center;
`;

export const SwiperCheck = styled.View`
  position: absolute;
  z-index: 2;
  top: 25%;
  right: 25%;
  width: 40%;
  height: 20px;
  border-radius: 10px;
  background-color: #1fb893;
  justify-content: center;
  align-items: center;
`;
