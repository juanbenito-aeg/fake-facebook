import styled from "styled-components/native";
import { Pressable } from "react-native";
import Story from "./Story";

const TextContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 20px;
`;

const Heading = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #222121;
`;

const AddNewText = styled.Text`
  font-size: 17px;
  color: #6884cd;
`;

const StoryHighlights = () => {
  return (
    <>
      <TextContainer>
        <Heading>Story Highlights</Heading>

        <Pressable>
          <AddNewText>Add New</AddNewText>
        </Pressable>
      </TextContainer>

      <Story profile={true} />
    </>
  );
};

export default StoryHighlights;
