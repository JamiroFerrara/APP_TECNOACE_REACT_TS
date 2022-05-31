import { View, Animated, Text, TouchableOpacity } from "react-native";
import { useEffect, useRef, useState } from "react";

function TranslateXRight({ duration = 400, fromValue = 0, toValue = 50, children }) {
    const translation = useRef(new Animated.Value(fromValue)).current;
    const [count, setCount] = useState(0);

    useEffect(() => {
        Animated.timing(translation, {
            toValue: toValue,
            duration: duration,
            useNativeDriver: true
        }).start();
    }, []);

  return (
        <Animated.View style={{
            transform: [{ translateX: translation }],}}>
            {children}
        </Animated.View>
  )
}

export default TranslateXRight