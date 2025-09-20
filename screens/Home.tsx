import styled from "styled-components";
import ToolBar from "../components/ToolBar";
import MainSeparator from "../components/MainSeparator";

const View = styled.View`
  height: 500px;
  align-items: center;
`;

const Home = () => {
  return (
    <View>
      <ToolBar />
      <MainSeparator />
    </View>
  );
};

export default Home;
