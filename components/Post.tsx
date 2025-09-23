import styled from "styled-components/native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import fakeUsers from "../data/fakedata";
import { View } from "react-native";
import Avatar from "./Avatar";

const Container = styled.View`
  flex: 1;
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  margin-top: 5px;
  padding: 0 10px;
`;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

const User = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #222121;
`;

const Time = styled.Text`
  font-size: 9px;
  color: #747476;
`;

const PostContent = styled.Text`
  font-size: 12px;
  color: #222121;
  line-height: 16px;
  padding: 0 11px;
`;

const Photo = styled.Image`
  width: 100%;
  height: 300px;
  margin-top: 9px;
`;

const Footer = styled.View`
  padding: 0 11px;
`;

const FooterCount = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 9px 0;
`;

const IconCount = styled.View`
  width: 20px;
  height: 20px;
  background-color: #1878f3;
  justify-content: center;
  align-items: center;
  margin-right: 6px;
  border-radius: 10px;
`;

const TextCount = styled.Text`
  font-size: 11px;
  color: #424040;
`;

const Separator = styled.View`
  width: 100%;
  height: 1px;
  background-color: #f9f9f9;
`;

const FooterMenu = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 9px 0;
`;

const Button = styled.TouchableOpacity`
  flex-direction: row;
`;

const Icon = styled.View`
  margin-right: 6px;
`;

const Text = styled.Text`
  font-size: 12px;
  color: #424040;
`;

const Post = () => {
  return (
    <>
      {fakeUsers.map((fakeUser, index) => {
        return (
          <Container key={index}>
            <Header>
              <Row>
                <Avatar source={fakeUser.source} />

                <View style={{ paddingLeft: 10 }}>
                  <User>{fakeUser.name}</User>

                  <Row>
                    <Time>{fakeUser.time}</Time>

                    <MaterialCommunityIcons
                      name="circle-small"
                      size={12}
                      color="#747476"
                    />

                    <MaterialCommunityIcons
                      name="earth"
                      size={10}
                      color="#747476"
                    />
                  </Row>
                </View>
              </Row>

              <MaterialCommunityIcons
                name="dots-horizontal"
                size={20}
                color="#747476"
              />
            </Header>

            <PostContent>{fakeUser.postContent}</PostContent>

            <Photo source={fakeUser.postImage} />

            <Footer>
              <FooterCount>
                <Row>
                  <IconCount>
                    <MaterialCommunityIcons
                      name="thumb-up-outline"
                      size={12}
                      color="#ffffff"
                    />
                  </IconCount>

                  <TextCount>{fakeUser.likes}</TextCount>
                </Row>

                <TextCount>{fakeUser.comments}</TextCount>
              </FooterCount>

              <Separator />

              <FooterMenu>
                <Button>
                  <Icon>
                    <MaterialCommunityIcons
                      name="thumb-up-outline"
                      size={20}
                      color="#424040"
                    />
                  </Icon>

                  <Text>Me gusta</Text>
                </Button>

                <Button>
                  <Icon>
                    <MaterialCommunityIcons
                      name="comment-outline"
                      size={20}
                      color="#424040"
                    />
                  </Icon>

                  <Text>Comentar</Text>
                </Button>

                <Button>
                  <Icon>
                    <MaterialCommunityIcons
                      name="share-outline"
                      size={20}
                      color="#424040"
                    />
                  </Icon>

                  <Text>Compartir</Text>
                </Button>
              </FooterMenu>
            </Footer>
          </Container>
        );
      })}
    </>
  );
};

export default Post;
