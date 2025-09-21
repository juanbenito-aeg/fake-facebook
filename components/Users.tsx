import styled from "styled-components/native";
import { ScrollView } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Avatar from "./Avatar";
import fakeUsers from "../data/fakedata";

const Container = styled.View`
  width: 100%;
  height: 60px;
  flex-direction: row;
  align-items: center;
  background-color: #ffffff;
`;

const Room = styled.TouchableOpacity`
  width: 100px;
  height: 40px;
  flex-direction: row;
  align-items: center;
  margin-right: 12px;
  border: 1px solid #82b1dd;
  border-radius: 20px;
  padding: 0 15px;
`;

const Text = styled.Text`
  padding-left: 6px;
  font-size: 12px;
  color: #1777ff;
`;

const User = styled.View`
  margin-right: 12px;
`;

const Users = () => {
  return (
    <Container>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingLeft: 12 }}
      >
        <Room>
          <MaterialCommunityIcons name="video-plus" size={26} color="#a748ee" />
          <Text>Crear{"\n"}sala</Text>
        </Room>

        {fakeUsers.map((fakeUser, index) => {
          return (
            <User key={index}>
              <Avatar source={fakeUser.source} online={fakeUser.online} />
            </User>
          );
        })}
      </ScrollView>
    </Container>
  );
};

export default Users;
