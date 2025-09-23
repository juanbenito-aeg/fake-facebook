import { ScrollView } from "react-native";
import ToolBar from "../components/ToolBar";
import MainSeparator from "../components/MainSeparator";
import Users from "../components/Users";
import Story from "../components/Story";
import Post from "../components/Post";

const Home = () => {
  return (
    <ScrollView>
      <ToolBar />
      <MainSeparator />
      <Users />
      <MainSeparator />
      <Story />
      <MainSeparator />
      <Post />
    </ScrollView>
  );
};

export default Home;
