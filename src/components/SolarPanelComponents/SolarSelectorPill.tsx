import { Pressable, Text } from "native-base";
import {colors} from '../../theme'
import usePress from '../../hooks/usePress'
import { useState } from 'react'
import Animated from 'react-native-reanimated'

interface Props {
  text: string
  onPress?: any
  isSelected: boolean
}

const inactiveColor = colors.green[900]
const activeColor = colors.primary[800]
const selectedColor = colors.green[600]

const AnButton = Animated.createAnimatedComponent(Pressable)

export default function SolarSelectorPill(props: Props) {
  const {text, onPress, isSelected} = props
  const [isPressed, setIsPressed] = useState(false)

  const pressStyle = usePress(getSelectedColor(isSelected), inactiveColor, isPressed)

  return (
    <AnButton
      p={1}
      bg="blueGray.800"
      w={24}
      onTouchStart={()=> setIsPressed(true)}
      onPressOut={() => {if (isPressed) {setIsPressed(false)}}}
      onPress={onPress}
      display={"flex"}
      alignItems="center"
      borderRadius={15}
      borderWidth={1}
      borderColor={"white"}
      style={[pressStyle]}
    >
      <Text>{text}</Text>
    </AnButton>
  );
}

function getSelectedColor(isSelected: boolean){
  if (isSelected){
      return selectedColor
  } else {
      return activeColor
  }
}
