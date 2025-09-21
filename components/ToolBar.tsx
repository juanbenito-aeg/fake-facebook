import styled from "styled-components/native";
import Avatar from "./Avatar";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const Container = styled.View`
  width: 100%;
  height: 92px;
  margin-block-end: 12px;
`;

const Row = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 0 11px;
  background-color: #ffffff;
`;

const Input = styled.TextInput`
  width: 85%;
  height: 40px;
  margin: 10px;
  border: 1px solid #dddddd;
  border-radius: 30px;
  padding: 0 8px;
`;

const Divider = styled.View`
  width: 100%;
  height: 0.5px;
  background-color: #dddddd;
`;

const Menu = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 42px;
`;

const MenuText = styled.Text`
  padding-left: 11px;
  font-size: 12px;
  font-weight: 500;
`;

const Separator = styled.View`
  width: 1px;
  height: 26px;
  background-color: #f0f0f0;
`;

const ToolBar = () => {
  return (
    <Container>
      <Row>
        <Avatar source={require("../assets/images/12.jpg")} />
        <Input placeholder="¿Qué estás pensando?" />
      </Row>

      <Divider />

      <Row>
        <Menu>
          <MaterialCommunityIcons
            name="video-account"
            size={20}
            color="#f44337"
          />
          <MenuText>Directo</MenuText>
        </Menu>

        <Separator />

        <Menu>
          <MaterialCommunityIcons
            name="image-multiple"
            size={20}
            color="#4caf50"
          />
          <MenuText>Foto</MenuText>
        </Menu>

        <Separator />

        <Menu>
          <MaterialCommunityIcons name="video-plus" size={20} color="#a748ee" />
          <MenuText>Sala</MenuText>
        </Menu>
      </Row>
    </Container>
  );
};

export default ToolBar;
