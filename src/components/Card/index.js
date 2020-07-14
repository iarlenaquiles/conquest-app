import React, { useState, createRef } from "react";
import { TouchableOpacity } from "react-native";
import Swiper from "react-native-deck-swiper";

import { AntDesign } from "@expo/vector-icons";

import data from "../../services/data";

import * as S from "./styles";
import CardHeader from "./CardHeader";
import Swiping from "./Swiping";
import Footer from "./CardFooter";
import Starred from "./Starred";
import Black from "./Black";
import Empty from "./Empty";

const Card = () => {
  const swiperRef = createRef();
  const [index, setIndex] = useState(0);
  const onSwiped = () => {
    setIndex(index + 1);
  };

  return (
    <>
      <Swiper
        ref={swiperRef}
        cards={data}
        cardsIndex={index}
        renderCard={card => (
          <S.Container>
            <Swiping swiperRef={swiperRef} />

            <CardHeader
              avatar={card.avatar}
              name={card.name}
              info={card.info}
              distance={card.distance}
            />

            <S.Body>
              <S.ContainerBody>
                <S.Title>Lorem Ipsum</S.Title>

                <S.List>
                  <Starred />
                  <Starred />
                  <Starred />
                  <Black />
                  <Black />
                  <Empty />
                </S.List>
              </S.ContainerBody>

              <S.Separate />

              <S.ContainerBottom>
                <S.Title>Lorem Ipsum</S.Title>
                <S.StarredsView>
                  <Starred />
                  <Starred />
                  <Starred />
                  <Black />
                  <Black />
                  <Empty />
                </S.StarredsView>
              </S.ContainerBottom>
            </S.Body>

            <Footer description={card.description} />

            <S.ContainerFooter>
              <TouchableOpacity>
                <S.ButtonText>Lorem Ipsum</S.ButtonText>
              </TouchableOpacity>
            </S.ContainerFooter>
          </S.Container>
        )}
        onSwiper={onSwiped}
        cardHorizontalMargin={0}
        showSecondCard="true"
        stackSize={5}
        disableTopSwipe
        disableBottomSwipe
        backgroundColor="transparent"
        animateOverlayLabelsOpacity
        animateCardOpacity
        overlayLabels={{
          left: {
            element: (
              <>
                <S.SwiperBackground />
                <S.SwiperClose>
                  <AntDesign name="close" size={70} style={{ color: "#fff" }} />
                </S.SwiperClose>
              </>
            )
          },
          right: {
            element: (
              <>
                <S.SwiperBackground />
                <S.SwiperCheck>
                  <AntDesign name="check" size={70} style={{ color: "#fff" }} />
                </S.SwiperCheck>
              </>
            )
          }
        }}
        infinite
      />
    </>
  );
};

export default Card;
