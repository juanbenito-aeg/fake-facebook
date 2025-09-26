import styled from "styled-components/native";
import { ScrollView } from "react-native";
import UserData from "../components/UserData";
import FeaturedSong from "../components/FeaturedSong";
import Actions from "../components/Actions";

const Banner = styled.Image`
  height: 225px;
`;

const Separator = styled.View`
  height: 2px;
  margin: 20px;
  background-color: #ececec;
`;

const Profile = () => {
  return (
    <ScrollView>
      <Banner source={require("../assets/images/profile-banner.jpg")} />

      <UserData />

      <FeaturedSong />

      <Actions />

      <Separator />
    </ScrollView>
  );
};

export default Profile;
