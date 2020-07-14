import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  border-radius: 30px;
  background-color: #fff;
`;

export const Text = styled.Text`
  color: #fff;
  font-size: 14px;
  line-height: 20px;
  padding: 1px;
  margin: auto;
`;

export const Body = styled.View`
  width: 100%;
  height: 300px;
  top: 35px;
  left: 0;
  flex-direction: column;
  border: 1px rgba(0, 0, 0, 0.03);
  background-color: rgba(129, 64, 216, 0.03);
`;

export const StarredsView = styled.View`
  flex: 1;
  width: 100%;
  height: 80px;
  margin-left: 20px;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
`;

export const ContainerBody = styled.View`
  width: 100%;
  height: 49%;
`;

export const List = styled.View`
  width: 100%;
  height: 80px;
  margin-left: 20px;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
`;

export const ContainerBottom = styled.View`
  width: 100%;
  height: 100px;
  top: 10px;
`;

export const Separate = styled.View`
  width: 100%;
  left: 5px;
  height: 1%;
  top: 1px;
  border: 2px rgba(0, 0, 0, 0.03);
  border-radius: 24px;
`;

export const Title = styled.Text`
  font-size: 14px;
  left: 20px;
  margin-top: 5px;
  z-index: 10;
`;

export const ContainerFooter = styled.View`
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
  height: 100%;
  border-radius: 20px;
  background-color: #fff;
  opacity: 0.9;
  align-items: center;
  align-self: center;
`;

export const SwiperClose = styled.View`
  position: absolute;
  z-index: 2;
  top: 25%;
  right: 25%;
  width: 200px;
  height: 200px;
  border-radius: 100px;
  background-color: #f23870;
  justify-content: center;
  align-items: center;
`;

export const SwiperCheck = styled.View`
  position: absolute;
  z-index: 2;
  top: 25%;
  right: 25%;
  width: 200px;
  height: 200px;
  border-radius: 100px;
  background-color: #1fb893;
  justify-content: center;
  align-items: center;
`;
