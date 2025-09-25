import styled from "styled-components/native";
import { ScrollView } from "react-native";
import FeaturedSong from "../components/FeaturedSong";

const Banner = styled.Image`
  height: 225px;
`;

const Profile = () => {
  return (
    <ScrollView>
      <Banner source={require("../assets/images/profile-banner.jpg")} />

      <FeaturedSong />
    </ScrollView>
  );
};

export default Profile;
