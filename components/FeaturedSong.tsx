import styled from "styled-components/native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const Container = styled.View`
  height: 50px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
`;

const Cover = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 10px;
`;

const SongDataContainer = styled.View`
  justify-content: space-evenly;
  margin-left: -80px;
`;

const SongData = styled.Text`
  font-size: 17px;
`;

const Title = styled(SongData)`
  font-weight: bold;
  color: #222121;
`;

const Artist = styled(SongData)`
  color: #747476;
`;

const FeaturedSong = () => {
  return (
    <Container>
      <Cover source={require("../assets/images/featured-song.jpg")} />

      <SongDataContainer>
        <Title>Hunger</Title>

        <Artist>Florence + The Machine</Artist>
      </SongDataContainer>

      <MaterialCommunityIcons
        name="dots-horizontal"
        size={20}
        color="#747476"
      />
    </Container>
  );
};

export default FeaturedSong;
