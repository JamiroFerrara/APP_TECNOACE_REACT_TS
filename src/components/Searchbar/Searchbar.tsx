import { TextInput, TouchableOpacity } from "react-native";
import Animated, {Easing, useSharedValue, useAnimatedStyle, withTiming} from 'react-native-reanimated'
import { View } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../../theme";
import { useState, useEffect} from "react"

interface Props {
  onChangeText: any;
  searchText: string;
}

const AnView = Animated.createAnimatedComponent(View)

function Searchbar(props: Props) {
  const { onChangeText, searchText } = props;
  const [isFocused, setIsFocused] = useState(false)

  const AnimatedPadding = useSharedValue(2)
  const AnimatedStyle = useAnimatedStyle(
    () => ({
      padding: AnimatedPadding.value
    }), [isFocused]
  )

  useEffect(() => {
    const easing = Easing.out(Easing.linear)
    if (isFocused){
      AnimatedPadding.value = withTiming(5, {duration: 200, easing})
    } 
    else {
      AnimatedPadding.value = withTiming(10, {duration: 200, easing})
    }
  }, [isFocused])

  return (
    <AnView backgroundColor={colors.primary[900]} style={AnimatedStyle}>
      <View
        style={AnimatedStyle}
        p={15}
        justifyContent="space-between"
        borderRadius={5}
        backgroundColor={colors.primary[800]}
        flexDir="row"
        alignItems={"center"}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            flexWrap: "wrap",
            backgroundColor: "transparent",
          }}
        >
          <AntDesign name="search1" color={"white"} size={20} />
          <TextInput
            style={{
              marginLeft: 10,
              width: "85%",
              color: "white",
              backgroundColor: "transparent",
            }}
            onFocus={() => setIsFocused(true)}
            onBlur={()=> setIsFocused(false)}
            onChangeText={onChangeText}
            placeholder="Search"
            placeholderTextColor={"lightgray"}
            selectionColor={"lightblue"}
          >
            {searchText}
          </TextInput>
        </View>

        <TouchableOpacity onPress={() => onChangeText("")}>
          <AntDesign name="closecircleo" color="lightgray" size={15} />
        </TouchableOpacity>
      </View>
    </AnView>
  );
}

export default Searchbar;