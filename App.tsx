import "react-native-gesture-handler";
import { StatusBar, ScrollView } from "react-native";
import Header from "./components/Header";
import Home from "./screens/Home";
import Friends from "./screens/Friends";
import Groups from "./screens/Groups";
import Profile from "./screens/Profile";
import Notifications from "./screens/Notifications";
import Menu from "./screens/Menu";

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#000000" barStyle="dark-content" />

      <ScrollView>
        <Header />
      </ScrollView>
    </>
  );
};

export default App;
