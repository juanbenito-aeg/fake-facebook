import styled from "styled-components/native";
import { ScrollView } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const Container = styled.View`
  width: 100%;
  height: 230px;
  flex-direction: row;
  align-items: center;
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
  border: 1px solid #dddddd;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  background-color: #ffffff;
`;

const Text = styled.Text`
  padding-top: 15px;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
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

            <UserCardFooter>
              <Text>Crear una historia</Text>
            </UserCardFooter>

            <UserCardPlus>
              <MaterialCommunityIcons name="plus" size={28} color="#ffffff" />
            </UserCardPlus>
          </UserCard>
        </ScrollView>
      </Container>
    </>
  );
};

export default Story;
