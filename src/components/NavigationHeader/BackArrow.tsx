import { useState } from "react";
import usePress from "../../hooks/usePress";
import Animated from "react-native-reanimated";
import { Pressable } from "native-base";
import { Octicons } from "@expo/vector-icons";
import { colors } from "../../theme";
import { GestureResponderEvent } from "react-native";

const AnPressable = Animated.createAnimatedComponent(Pressable);

interface Props{
  onPress?: (event: GestureResponderEvent) => void;
}

export default function BackArrow(props: Props) {
  const {onPress} = props
  const [isPressed, setIsPressed] = useState(false);

  const animStyle = usePress(
    "transparent",
    "transparent",
    isPressed
  );

  return (
    <AnPressable
      position={"absolute"}
      left={25}
      w={9}
      h={9}
      justifyContent={"center"}
      alignItems="center"
      borderRadius={20}
      onTouchStart={() => setIsPressed(true)}
      onPressOut={() => {
        if (isPressed) {
          setIsPressed(false);
        }
      }}
      onPress={onPress}
      style={animStyle}
    >
      <Octicons
        name="arrow-left"
        color={colors.primary[100]}
        size={25}
      />
    </AnPressable>
  );
}
