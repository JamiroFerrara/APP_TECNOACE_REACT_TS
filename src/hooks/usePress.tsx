import { useEffect } from "react";
import {Easing, useSharedValue, useAnimatedStyle, withTiming} from 'react-native-reanimated'
import interpolateColorBugFix from '../utils/interpolate-color'

export default function usePress(activeColor: string, inactiveColor: string, isPressed: boolean){

  const textColorProgress = useSharedValue(0)
  const scaleAnimation = useSharedValue(1)
  const AnimatedStyle = useAnimatedStyle(
    () => ({
      backgroundColor: interpolateColorBugFix(
        textColorProgress.value,
        [0,1],
        [activeColor, inactiveColor]
      ),
      transform: [{scale: scaleAnimation.value}]
    }),
    [activeColor, inactiveColor]
  )

  useEffect(() => {
    const easing = Easing.out(Easing.linear)
    if (isPressed){
      textColorProgress.value = withTiming(1, {duration: 30, easing})
      scaleAnimation.value = withTiming(0.985, {duration: 30, easing})

    } else {
      textColorProgress.value = withTiming(0, {duration: 200, easing})
      scaleAnimation.value = withTiming(1, {duration: 30, easing})
    }
  }, [activeColor, inactiveColor, isPressed])

  return AnimatedStyle
}
