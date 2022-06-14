import { View, Text, Image, HStack, Pressable } from "native-base";
import { colors } from "../../theme";
import GradientBox from "../GradientBox/GradientBox";
import Animated, { Easing, useSharedValue, useAnimatedStyle, withTiming, withSequence, } from "react-native-reanimated";
import { useEffect, useState } from "react";

const AnButton = Animated.createAnimatedComponent(Pressable);

interface Props {
  avgTemperature: string;
  icon: string;
  onPress?: any;
}

export default function WeatherTemp(props: Props) {
  const { avgTemperature, icon, onPress } = props;
  const [isPressed, setIsPressed] = useState(false);

  const scaleAnimation = useSharedValue(1);
  const opacityAnimation = useSharedValue(1);
  const AnimatedStyle = useAnimatedStyle(
    () => ({
      transform: [{ scale: scaleAnimation.value }],
      opacity: opacityAnimation.value
    }),
    []
  );

  useEffect(() => {
    const easing = Easing.out(Easing.sin);
    scaleAnimation.value = withSequence(
      withTiming(0.97, { duration: 50, easing }),
      withTiming(1, { duration: 100, easing })
    );
    opacityAnimation.value = withSequence(
      withTiming(0.5, { duration: 150, easing }),
      withTiming(1, { duration: 500, easing })
    );
  }, [isPressed]);

  return (
    <AnButton
      onPress={onPress}
      style={AnimatedStyle}
      onTouchStart={() => setIsPressed(!isPressed)}
    >
      <GradientBox
        mx={70}
        mb={10}
        color1={colors.primary[800]}
        color2={colors.primary[900]}
      >
        <HStack borderRadius={25} alignSelf={"center"}>
          <Text fontSize={40}>{avgTemperature}</Text>
          <Text>c</Text>
          <Image
            src={"http:" + icon}
            ml={7}
            height={16}
            width={16}
            alt="Current Weather"
          />
        </HStack>
      </GradientBox>
    </AnButton>
  );
}
