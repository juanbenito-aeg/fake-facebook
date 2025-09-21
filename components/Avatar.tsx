import styled from "styled-components";

interface AvatarProps {
  source: string;
  online: boolean;
}

const Container = styled.View`
  width: 40px;
  height: 40px;
  position: relative;
`;

const ProfileImage = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

const UserActive = styled.View`
  position: absolute;
  bottom: -2px;
  right: -2px;
  width: 15px;
  height: 15px;
  border: 2px solid #ffffff;
  border-radius: 7.5px;
  background-color: #10d24b;
`;

const Avatar = ({ source, online }: AvatarProps) => {
  return (
    <Container>
      <ProfileImage source={source} />
      {online && <UserActive />}
    </Container>
  );
};

export default Avatar;
