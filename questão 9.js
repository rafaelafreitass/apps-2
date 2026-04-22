import React, { useState, useEffect, useRef } from "react";
import { Animated, Easing } from "react-native";
import styled, { ThemeProvider } from "styled-components/native";

const theme = {
  colors: {
    primary: "#007AFF",
    success: "#4CD964",
    warning: "#FFCC00",
    danger: "#FF3B30",
    track: "#E5E5EA",
    text: "#1C1C1E",
    border: "#C7C7CC",
  },
  spacing: {
    md: "16px",
    lg: "24px",
  },
};

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  padding: ${(props) => props.theme.spacing.lg};
  background-color: #f2f2f7;
`;

const Card = styled.View`
  background-color: #fff;
  padding: ${(props) => props.theme.spacing.lg};
  border-radius: 16px;
  shadow-color: #000;
  shadow-opacity: 0.1;
  shadow-radius: 10px;
  elevation: 5;
`;

const Label = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 8px;
`;

const Input = styled.TextInput`
  height: 50px;
  border-width: 1px;
  border-color: ${(props) => props.theme.colors.border};
  border-radius: 8px;
  padding: 0 16px;
  font-size: 18px;
  margin-bottom: 24px;
  color: ${(props) => props.theme.colors.text};
`;

const Track = styled.View`
  height: 12px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.track};
  border-radius: 6px;
  overflow: hidden;
`;

const Bar = Animated.createAnimatedComponent(styled.View`
  height: 100%;
  border-radius: 6px;
`);

const ProgressBar = ({ value }) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const safeValue = Math.min(Math.max(Number(value) || 0, 0), 100);
    Animated.timing(animatedValue, {
      toValue: safeValue,
      duration: 600,
      easing: Easing.out(Easing.ease),
      useNativeDriver: false,
    }).start();
  }, [value]);

  const width = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
    extrapolate: "clamp",
  });

  const backgroundColor = animatedValue.interpolate({
    inputRange: [0, 50, 100],
    outputRange: [
      theme.colors.success,
      theme.colors.warning,
      theme.colors.danger,
    ],
  });

  return (
    <Track>
      <Bar style={{ width, backgroundColor }} />
    </Track>
  );
};

export default function App() {
  const [inputValue, setInputValue] = useState("0");

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Card>
          <Label>% (de 0 a 100):</Label>
          <Input
            keyboardType="numeric"
            placeholder="Ex: 75"
            onChangeText={setInputValue}
            value={inputValue}
            maxLength={3}
          />

          <ProgressBar value={inputValue} />

          <Label
            style={{
              marginTop: 16,
              textAlign: "center",
              fontSize: 14,
              color: theme.colors.primary,
            }}
          >
            {Math.min(Math.max(Number(inputValue) || 0, 0), 100)}%
          </Label>
        </Card>
      </Container>
    </ThemeProvider>
  );
}
