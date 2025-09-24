import styled from "styled-components/native";
import Animated from "react-native-reanimated";
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
  z-index: 10
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
    <>
      <Container>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ paddingLeft: 10 }}
        >
          <UserCard>
            <UserCardStory source={require("../assets/images/story.jpg")} />

            <UserCardFooter profile={true}>
              <Text profile={true}>Crear una historia</Text>
            </UserCardFooter>

            <UserCardPlus>
              <MaterialCommunityIcons name="plus" size={28} color="#ffffff" />
            </UserCardPlus>
          </UserCard>

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
        </ScrollView>
      </Container>
    </>
  );
};

export default Story;
