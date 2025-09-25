import styled from "styled-components/native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

interface Action {
  iconName: string;
  description: string;
}

const actions: Action[] = [
  {
    iconName: "plus",
    description: "Add Story",
  },
  {
    iconName: "format-list-bulleted",
    description: "Activity Log",
  },
  {
    iconName: "pencil",
    description: "Edit Profile",
  },
  {
    iconName: "dots-horizontal",
    description: "More",
  },
];

const ActionsContainer = styled.View`
  height: 90px;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 25px;
`;

const ActionContainer = styled.View`
  align-items: center;
`;

const ActionIcon = styled.TouchableOpacity`
  border-radius: 50%;
  padding: 12.5px;
  background-color: #ecedf0;
`;

const ActionDescription = styled.Text`
  margin-top: 5px;
  font-size: 16px;
`;

const Actions = () => {
  return (
    <ActionsContainer>
      {actions.map((action, index) => {
        return (
          <ActionContainer key={index}>
            <ActionIcon>
              <MaterialCommunityIcons
                name={action.iconName}
                size={30}
                color="747476"
              />
            </ActionIcon>

            <ActionDescription>{action.description}</ActionDescription>
          </ActionContainer>
        );
      })}
    </ActionsContainer>
  );
};

export default Actions;
