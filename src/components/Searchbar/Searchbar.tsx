import { TextInput, TouchableOpacity } from "react-native";
import { View } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../../theme";

interface Props {
  onChangeText: any;
  searchText: string;
}

function Searchbar(props: Props) {
  const { onChangeText, searchText } = props;

  return (
    <View backgroundColor={colors.primary[900]} py={2} p={2}>
      <View
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
    </View>
  );
}

export default Searchbar;