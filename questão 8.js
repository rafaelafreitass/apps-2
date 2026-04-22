import React from "react";
import styled, { ThemeProvider } from "styled-components/native";

const theme = {
  colors: {
    primary: "#007AFF",
    background: "#FFFFFF",
    text: "#1C1C1E",
    muted: "#8E8E93",
    border: "#E5E5EA",
  },
  spacing: {
    sm: "8px",
    md: "16px",
    lg: "24px",
  },
};

const H1 = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 8px;
`;

const H2 = styled.Text`
  font-size: 24px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.text};
`;

const Body = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 16px;
`;

const Caption = styled.Text`
  font-size: 12px;
  color: ${(props) => props.theme.colors.muted};
`;

const Button = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 12px 24px;
  border-radius: 8px;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
`;

const Card = styled.View`
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 12px;
  border-width: 1px;
  border-color: ${(props) => props.theme.colors.border};
  padding: ${(props) =>
    props.theme.spacing[props.$spacing] || props.theme.spacing.md};
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  elevation: 3;
`;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f7;
`;

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Card $spacing="lg">
          <H1>questão 8</H1>
          <Body>feito utilizando o themeprovider!</Body>
          <Button onPress={() => {}}>
            <ButtonText>acessar</ButtonText>
          </Button>
          <Caption style={{ marginTop: 12 }}>versão INFO161 2026.1</Caption>
        </Card>
      </Container>
    </ThemeProvider>
  );
}
