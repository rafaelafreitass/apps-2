import React, { useState } from "react";
import { FlatList, useColorScheme, Platform, Dimensions } from "react-native";
import styled, { ThemeProvider } from "styled-components/native";

const { width } = Dimensions.get("window");
const columnWidth = width / 3;

const lightTheme = {
  colors: {
    background: "#FFFFFF",
    surface: "#F2F2F7",
    text: "#000000",
    primary: "#007AFF",
    secondary: "#8E8E93",
    border: "#E5E5EA",
  },
};

const darkTheme = {
  colors: {
    background: "#000000",
    surface: "#1C1C1E",
    text: "#FFFFFF",
    primary: "#0A84FF",
    secondary: "#8E8E93",
    border: "#38383A",
  },
};

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
`;

const FixedHeader = styled.View`
  background-color: ${(props) => props.theme.colors.background};
  z-index: 10;
`;

const HeaderContent = styled.View`
  padding: 24px 16px;
  align-items: center;
`;

const AvatarContainer = styled.View`
  ${Platform.select({
    ios: `
      shadow-color: #000;
      shadow-offset: 0px 4px;
      shadow-opacity: 0.3;
      shadow-radius: 4.65px;
    `,
    android: `
      elevation: 8;
    `,
  })}
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 60px;
`;

const Avatar = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 60px;
`;

const Name = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.text};
  margin-top: 16px;
`;

const Role = styled.Text`
  font-size: 14px;
  color: ${(props) => props.theme.colors.secondary};
  margin-top: 4px;
`;

const StatsGrid = styled.View`
  flex-direction: row;
  justify-content: space-around;
  padding: 20px 0;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-color: ${(props) => props.theme.colors.border};
`;

const StatItem = styled.View`
  align-items: center;
`;

const StatValue = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.text};
`;

const StatLabel = styled.Text`
  font-size: 12px;
  color: ${(props) => props.theme.colors.secondary};
`;

const ActionWrapper = styled.View`
  padding: 16px;
`;

const FollowButton = styled.Pressable`
  background-color: ${(props) =>
    props.$isFollowing ? "transparent" : props.theme.colors.primary};
  border: 1.5px solid ${(props) => props.theme.colors.primary};
  height: 44px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

const FollowText = styled.Text`
  color: ${(props) =>
    props.$isFollowing ? props.theme.colors.primary : "#FFFFFF"};
  font-weight: 600;
  font-size: 16px;
`;

const PostImage = styled.Image`
  width: ${columnWidth}px;
  height: ${columnWidth}px;
  border-width: 0.5px;
  border-color: ${(props) => props.theme.colors.background};
`;

const FIXED_POSTS = [
  {
    id: "1",
    uri: "https://i.pinimg.com/1200x/76/88/27/76882753ed31f3693f664e1463e36263.jpg",
  },
  {
    id: "2",
    uri: "https://www.eventim.com.br/campaign/fileadmin/fm_br/campaigns/2025/avegend/A7X_Eventim_EmailMkt.png",
  },
  {
    id: "3",
    uri: "https://i.pinimg.com/736x/73/d6/a9/73d6a9ef3075f3fc1fdd08fdce58c6cc.jpg",
  },
  {
    id: "4",
    uri: "https://cdn.folhape.com.br/img/pc/1100/1/dn_arquivo/2026/02/daniel-enquadramento-capa-2026-02-04t102521149.jpg",
  },
  {
    id: "5",
    uri: "https://rollingstone.com.br/wp-content/uploads/2025/10/Avenged-Sevenfold-2025-foto-Lexie-Alley-05.jpg",
  },
  {
    id: "6",
    uri: "https://m.media-amazon.com/images/I/91llIuuUx9L._UF1000,1000_QL80_.jpg",
  },
];
export default function ProfileScreen() {
  const scheme = useColorScheme();
  const [isFollowing, setIsFollowing] = useState(false);
  const activeTheme = scheme === "dark" ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={activeTheme}>
      <Container>
        <FixedHeader>
          <HeaderContent>
            <AvatarContainer>
              <Avatar
                source={{
                  uri: "https://i.pinimg.com/736x/5f/f6/19/5ff619c0138e7cb939751ad401da0528.jpg",
                }}
              />
            </AvatarContainer>
            <Name>Matthew Sanders</Name>
            <Role>Cantor</Role>
          </HeaderContent>

          <StatsGrid>
            <StatItem>
              <StatValue>6</StatValue>
              <StatLabel>Posts</StatLabel>
            </StatItem>
            <StatItem>
              <StatValue>3M</StatValue>
              <StatLabel>Seguidores</StatLabel>
            </StatItem>
            <StatItem>
              <StatValue>5</StatValue>
              <StatLabel>Seguindo</StatLabel>
            </StatItem>
          </StatsGrid>

          <ActionWrapper>
            <FollowButton
              $isFollowing={isFollowing}
              onPress={() => setIsFollowing(!isFollowing)}
            >
              <FollowText $isFollowing={isFollowing}>
                {isFollowing ? "Seguindo" : "Seguir"}
              </FollowText>
            </FollowButton>
          </ActionWrapper>
        </FixedHeader>

        <FlatList
          data={FIXED_POSTS}
          numColumns={3}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <PostImage source={{ uri: item.uri }} />}
          showsVerticalScrollIndicator={false}
        />
      </Container>
    </ThemeProvider>
  );
}
