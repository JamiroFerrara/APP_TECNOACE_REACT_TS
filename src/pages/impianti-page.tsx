import { View } from "native-base";
import {Platform} from 'react-native'
import ListViewItem from "../components/ListViewItem/ListViewItem";
import { ScrollView } from "react-native-gesture-handler";
import Searchbar from "../components/Searchbar/Searchbar";
import { useState } from "react";
import { colors } from "../theme";

const MarginTop = Platform.OS === 'ios' ? 12 : 0

const items = [
  { title: "Zizioli Impianti", description: "This is a desc" },
  { title: "asdf Impianti", description: "This is a desc" },
  { title: "Zizdfoli Impianti", description: "This is a desc" },
  { title: "Zizdfoli Impianti", description: "This is a desc" },
  { title: "Zizdfoli Impianti", description: "This is a desc" },
  { title: "Zizdfoli Impianti", description: "This is a desc" },
  { title: "Zizdfoli Impianti", description: "This is a desc" },
  { title: "Zizdfoli Impianti", description: "This is a desc" },
  { title: "Zizdfoli Impianti", description: "This is a desc" },
  { title: "Zizdfoli Impianti", description: "This is a desc" },
  { title: "Zizdfoli Impianti", description: "This is a desc" },
  { title: "Zizdfoli Impianti", description: "This is a desc" },
];

const filteredItems = (text: string) => {
  return items.filter((item) => {
    return Object.values(item)
      .join("")
      .toLowerCase()
      .includes(text.toLowerCase());
  });
};

interface Props {
  navigation: any;
}

export default function Impianti(props: Props) {
  const { navigation } = props;
  const [searchText, onChangeText] = useState("");

  function itemPressed() {
    navigation.navigate("Detail");
    onChangeText("");
  }

  return (
    <>
      <View style={{marginTop: MarginTop}}/>

      <Searchbar
        onChangeText={onChangeText}
        searchText={searchText}
      ></Searchbar>

      <ScrollView style={{ backgroundColor: colors.primary[900] }}>
        <View>
          {filteredItems(searchText).map((item, index) => (
            <ListViewItem
              onPress={() => itemPressed()}
              key={index}
              text={item.title}
              description={item.description}
            ></ListViewItem>
          ))}
        </View>
      </ScrollView>

    </>
  );
}