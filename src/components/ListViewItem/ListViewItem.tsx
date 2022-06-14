import React, { useState } from "react";
import Animated from 'react-native-reanimated'
import { Pressable } from "native-base";
import styles from "./ListViewItem.module.scss";
import { View, Text, GestureResponderEvent } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MotiView } from "moti";
import { colors } from "../../theme";
import usePress from "../../hooks/usePress"

interface Props {
  onPress?: (event: GestureResponderEvent) => void;
  text: string;
  description: string;
}

const activeColor = colors.primary[800]
const inactiveColor = colors.primary[700]

const APressable = Animated.createAnimatedComponent(Pressable)

function ListViewItem(props: Props) {
  const { onPress, text, description } = props;
  const [isPressed, setIsPressed] = useState(false)

  const animatedStyle = usePress(activeColor, inactiveColor, isPressed)

  return (
    <MotiView
      from={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "timing", duration: 400 }}
    >
      <APressable
        m="5px"
        p="15px"
        flexDirection="row"
        borderRadius="10px"
        alignItems="center"
        justifyContent="center"
        style={[animatedStyle]}
        onTouchStart={()=> setIsPressed(true)}
        onPressOut={() => {if (isPressed) {setIsPressed(false)}}}
        onPress={onPress}
      >
        <View style={styles.itemLeft}>
          <AntDesign
            name="areachart"
            style={styles.icon}
            size={24}
          />

          <View style={styles.rowContainer}>
            <Text style={styles.title}>{text}</Text>
            <Text style={styles.description}>{description}</Text>
          </View>
        </View>

        <View style={styles.circular}></View>
      </APressable>
    </MotiView>
  );
}

export default ListViewItem;
