import styled from "styled-components/native";
import Avatar from "./Avatar";

const UserDataContainer = styled.View`
  margin-top: -80px;
  align-items: center;
  row-gap: 10px;
`;

const UserAvatar = styled(Avatar)`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  background-color: #ffffff;
  outline-width: 3.5px;
  outline-style: solid;
  outline-color: #1777f2;
  outline-offset: -7px;
`;

const UserNameAndSurname = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #222121;
`;

const UserData = () => {
  return (
    <UserDataContainer>
      <UserAvatar
        source={require("../assets/images/12.jpg")}
        online={true}
        profile={true}
      />

      <UserNameAndSurname>Paola Mariselli</UserNameAndSurname>
    </UserDataContainer>
  );
};

export default UserData;
