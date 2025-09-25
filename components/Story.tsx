import styled from "styled-components/native";
import { Animated } from "react-native";
import * as Animations from "../animations/storyAnimations";
import { ScrollView } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import fakeStories from "../data/fakeStories";
import Avatar from "./Avatar";

const Container = styled.View`
  width: 100%;
  height: 230px;
  flex-direction: row;
  align-items: center;
  background-color: #ffffff;
`;

const FakeCard = styled.View`
  width: 110px;
  height: 200px;
  margin-left: 10px;
  background-color: #ffffff;
`;

const PersonalCard = styled.View`
  width: 110px;
  height: 200px;
  margin-right: 10px;
  position: absolute;
  z-index: 10;
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 10px;
`;

const PersonalCardStory = styled.Image`
  width: 100%;
  height: 130px;
  border-radius: 10px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  position: absolute;
  top: 0;
  left: 0;
`;

const PersonalCardIcon = styled.Image`
  width: 34px;
  height: 34px;
  border-width: 3px;
  border-color: #ffffff;
  border-radius: 17px;
  background-color: #3a86e9;
  position: absolute;
  top: 115px;
  left: 40px;
`;

const UserCard = styled.View`
  width: 110px;
  height: 200px;
  margin-right: 10px;
  position: relative;
`;

const UserCardStory = styled.Image`
  width: 100%;
  height: 200px;
  border-radius: 10px;
`;

const UserCardPlus = styled.View`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 115px;
  left: 40px;
  align-items: center;
  border-radius: 15px;
  background-color: #3a86e9;
`;

const UserCardFooter = styled.View`
  width: 100%;
  height: 35%;
  position: absolute;
  top: 130px;
  left: 0;
  background-color: ${(props) => (props.profile ? "#ffffff" : "transparent")};
`;

const Text = styled.Text`
  margin: 0 10px;
  padding-top: ${(props) => (props.profile ? "155px" : "45px")};
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  color: ${(props) => (props.profile ? "#000000" : "#ffffff")};
`;

const UserOnCard = styled.View`
  position: absolute;
  top: 8px;
  left: 8px;
  background-color: #ffffff;
  border-radius: 20px;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
`;

const Story = () => {
  return (
    <Container>
      <PersonalCard
        as={Animated.View}
        style={{
          top: Animations.cardTop,
          left: Animations.cardLeft,
          height: Animations.cardHeight,
          borderRadius: Animations.cardRadius,
          borderTopLeftRadius: Animations.cardLeftRadius,
          borderTopRightRadius: Animations.cardRightRadius,
          borderBottomLeftRadius: Animations.cardLeftRadius,
          borderBottomRightRadius: Animations.cardRightRadius,
        }}
      >
        <PersonalCardStory
          as={Animated.Image}
          source={require("../assets/images/story.jpg")}
          style={{
            top: Animations.imageTop,
            left: Animations.imageLeft,
            width: Animations.imageWidth,
            height: Animations.imageHeight,
            marginRight: Animations.imageMargin,
            marginTop: Animations.imageMargin,
            borderTopLeftRadius: Animations.imageRadius,
            borderTopRightRadius: Animations.imageRadius,
            borderBottomLeftRadius: Animations.imageBottomRadius,
            borderBottomRightRadius: Animations.imageBottomRadius,
          }}
        />

        <Text
          as={Animated.Text}
          profile={true}
          style={{
            opacity: Animations.textOpacity,
            scale: Animations.textScale,
          }}
        >
          Crear una historia
        </Text>

        <PersonalCardIcon
          as={Animated.View}
          style={{
            transform: [{ scale: Animations.iconScale }],
            top: Animations.iconTop,
            left: Animations.iconLeft,
          }}
        >
          <MaterialCommunityIcons name="plus" size={28} color="#ffffff" />
        </PersonalCardIcon>
      </PersonalCard>

      <Animated.ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingLeft: 10, flexDirection: "row" }}
        scrollEventThrottle={5}
        onScroll={Animated.event([
          { nativeEvent: { contentOffset: { x: Animations.scroll_x } } },
        ])}
      >
        <FakeCard />

        {fakeStories.map((fakeStory, index) => {
          return (
            <UserCard key={index}>
              <UserCardStory source={fakeStory.source} />

              <UserCardFooter profile={false}>
                <Text profile={false}>{fakeStory.name}</Text>
              </UserCardFooter>

              <UserOnCard>
                <Avatar
                  source={fakeStory.user}
                  story={true}
                  checked={fakeStory.checked}
                />
              </UserOnCard>
            </UserCard>
          );
        })}
      </Animated.ScrollView>
    </Container>
  );
};

export default Story;
