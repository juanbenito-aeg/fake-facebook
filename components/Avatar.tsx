import styled from "styled-components";

interface AvatarProps {
  source: string;
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

const Avatar = ({ source }: AvatarProps) => {
  return (
    <Container>
      <ProfileImage source={source} />
    </Container>
  );
};

export default Avatar;
