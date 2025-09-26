import styled from "styled-components/native";
import UserData from "../components/UserData";
import FeaturedSong from "../components/FeaturedSong";
import Actions from "../components/Actions";
import StoryHighlights from "../components/StoryHighlights";

const Container = styled.ScrollView`
  background-color: #ffffff;
`;

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
    <Container>
      <Banner source={require("../assets/images/profile-banner.jpg")} />
      <UserData />
      <FeaturedSong />
      <Actions />
      <Separator />
      <StoryHighlights />
    </Container>
  );
};

export default Profile;
