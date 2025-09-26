import styled from "styled-components/native";

interface AvatarProps {
  source: string;
  online: boolean;
  story: boolean;
  checked: boolean;
  profile: boolean;
}

const Container = styled.View`
  width: 40px;
  height: 40px;
  position: relative;
`;

const ProfileImage = styled.Image`
  width: ${(props) => (props.profile ? 127.5 : 40)};
  height: ${(props) => (props.profile ? 127.5 : 40)};
  margin: auto;
  border-radius: 63.75px;
  border-width: ${(props) => (props.story ? "3px" : 0)};
  border-color: ${(props) => (props.checked ? "#ffffff" : "#1777f2")};
  padding: ${(props) => (props.profile ? "5px" : 0)};
`;

const UserActive = styled.View`
  position: absolute;
  bottom: ${(props) => (props.profile ? 17 : -2) + "px"};
  right: ${(props) => (props.profile ? 12 : -2) + "px"};
  width: ${(props) => (props.profile ? 25 : 15) + "px"};
  height: ${(props) => (props.profile ? 25 : 15) + "px"};
  border: ${(props) => (props.profile ? 4 : 2) + "px"} solid #ffffff;
  border-radius: 12.5px;
  background-color: #10d24b;
`;

const Avatar = ({
  style,
  source,
  online,
  story,
  checked,
  profile,
}: AvatarProps) => {
  return (
    <Container style={style}>
      <ProfileImage
        source={source}
        story={story}
        checked={checked}
        profile={profile}
      />

      {online && <UserActive profile={profile} />}
    </Container>
  );
};

export default Avatar;
