import { View, Animated, Text, TouchableOpacity } from "react-native";
import { useEffect, useRef, useState } from "react";

function FadeIn({ duration, children }) {
  const translation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(translation, {
      toValue: 1,
      duration: duration,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View
      style={{
        opacity: translation,
      }}
    >
      {children}
    </Animated.View>
  );
}

export default FadeIn;