import * as React from "react";
import { useState } from 'react'
import { Button, Center } from "native-base";
import { ActivityIndicator } from "react-native"
import Animated from 'react-native-reanimated'
import usePress from '../../hooks/usePress'

interface Props {
  handleButtonPress?: any
  activeColor: string,
  inactiveColor: string,
  isLoading?: boolean
}

const AnButton = Animated.createAnimatedComponent(Button)

export default function AnimatedButton(props: Props) {
  const { handleButtonPress, activeColor, inactiveColor, isLoading } = props
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
      {isLoading? Spinner() : "Login"}
    </AnButton>
  );
}

function Spinner(){
  return(
    <ActivityIndicator size={20} color="#FFFFFF"/>
  )
}
