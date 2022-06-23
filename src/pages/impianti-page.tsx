import { View, Center, Pressable } from "native-base";
import { Platform, ActivityIndicator} from 'react-native'
import ListViewItem from "../components/ListViewItem/ListViewItem";
import { ScrollView } from "react-native-gesture-handler";
import Searchbar from "../components/Searchbar/Searchbar";
import { useState, useEffect } from "react";
import { colors } from "../theme";
import { ResponsePlantList } from '../server/tace_interfaces'

import {GetListOfConnectedPlants} from '../server/signalr'

const MarginTop = Platform.OS === 'ios' ? 12 : 0

let items: Array<ResponsePlantList>;

interface Props {
  navigation: any;
}

export default function Impianti(props: Props) {
  const { navigation } = props;
  const [isLoading, setIsLoading] = useState(true)
  const [searchText, onChangeText] = useState("");

  useEffect(()=> {
      if (isLoading === true){
          
        const data = async () => {
          const res = await GetListOfConnectedPlants();
          items = res;
          setIsLoading(false);
          return res;
      }
    data();
    }
  })

  function itemPressed(plantID: number) {
    navigation.navigate("Detail", {plantID: plantID});
    onChangeText("");
  }

  if (!isLoading){
    return (
      <>
        <View style={{marginTop: MarginTop}}/>

        <Searchbar
          onChangeText={onChangeText}
          searchText={searchText}
        ></Searchbar>

        <ScrollView style={{ backgroundColor: colors.primary[900] }} keyboardShouldPersistTaps={'handled'}>
          <View>
            {filteredItems(searchText).map((item: any, index: number) => (
              <ListViewItem
                onPress={() => itemPressed(item.plantCode)}
                key={index}
                text={item.plantDesc}
                description={item.plantPower + " kvH"}
              ></ListViewItem>
            ))}
          </View>
        </ScrollView>
      </>
    );
  } else {
    return (
      <Center h="full">
        <ActivityIndicator size={60} color="#FFFFFF"/>
      </Center>
    )
  }
}

const filteredItems = (text: string) => {
  return items.filter((item: any) => {
    return Object.values(item)
      .join("")
      .toLowerCase()
      .includes(text.toLowerCase());
  });
};

