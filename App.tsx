import "react-native-gesture-handler";
import { StatusBar, ScrollView } from "react-native";
import Header from "./components/Header";

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
