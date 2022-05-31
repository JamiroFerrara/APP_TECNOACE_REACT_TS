import * as React from "react";
import { useState } from 'react'
import { Button } from "native-base";
import Animated from 'react-native-reanimated'
import usePress from '../../hooks/usePress'

interface Props {
  handleButtonPress?: any
  activeColor: string,
  inactiveColor: string
}

const AnButton = Animated.createAnimatedComponent(Button)

export default function AnimatedButton(props: Props) {
  const { handleButtonPress, activeColor, inactiveColor } = props
  const [isPressed, setIsPressed] = useState(false)

  const pressStyle = usePress(activeColor, inactiveColor, isPressed)

  return (
    <AnButton
      alignSelf="center"
      width="100%"
      onTouchStart={()=> setIsPressed(true)}
      onPressOut={() => {if (isPressed) {setIsPressed(false)}}}
      onPress={handleButtonPress}
      mt={25}
      borderWidth={1}
      style={[pressStyle]}
    >
      Login
    </AnButton>
  );
}
