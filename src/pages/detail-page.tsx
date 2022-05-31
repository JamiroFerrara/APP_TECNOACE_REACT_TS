import { HStack, ScrollView, Text, Center, View, Pressable } from "native-base";
import { MotiView } from "moti";
import MapView from "react-native-maps";
import BackArrow from "../components/BackArrow/BackArrow";
import {getWeather } from '../utils/weather'

interface Props {
  navigation: any;
}

const padding = 5;
const Title = (text: string) => {
  return (
    <Text fontSize={23} mb={2}>
      {text}
    </Text>
  );
};

function DetailsScreen(props: Props) {
  const { navigation } = props;

  function handlePress(){
     getWeather() 
  }

  return (
    <ScrollView mx={2}>
      <Center p={3}>
        <Text fontSize={25}>Impianto</Text>
        <BackArrow onPress={() => navigation.goBack()} />
      </Center>

      <MapView style={{ height: 160, borderRadius: 50 }} />

      <MotiView from={{ opacity: 0, translateX: 10 }} animate={{ opacity: 1, translateX: 0 }} transition={{ type: "timing", duration: 350, }} >
        <Pressable borderWidth={1} borderColor="text.600" p={padding} mt={5} borderRadius={10} backgroundColor={"blueGray.700"} onPress={() => handlePress()}>
          {Title("Dettaglio Impianti")}

          <HStack>
            <Text w={220} fontSize={15} color={"text.400"}>
              Produzione Istantanea
            </Text>
            <Text mr={2} fontSize={15} color={"text.200"}>
              20340
            </Text>
            <Text fontSize={15} color={"text.200"}>
              kvh
            </Text>
          </HStack>

          <HStack>
            <Text w={220} fontSize={15} color={"text.400"}>
              Produzione Mensile
            </Text>
            <Text mr={2} fontSize={15} color={"text.200"}>
              1394
            </Text>
            <Text fontSize={15} color={"text.200"}>
              kvh
            </Text>
          </HStack>

          <HStack>
            <Text w={220} fontSize={15} color={"text.400"}>
              Produzione Annua
            </Text>
            <Text mr={2} fontSize={15} color={"text.200"}>
              22999
            </Text>
            <Text fontSize={15} color={"text.200"}>
              kvh
            </Text>
          </HStack>
        </Pressable>
      </MotiView>

      <View p={padding} borderBottomWidth={2} borderColor={"white"} mx={2}>
        {Title("Irraggiamento")}

        <ScrollView horizontal={true} zIndex={20} nestedScrollEnabled={true}>
          <View borderColor={"white"} backgroundColor={"red.50"} borderWidth={1} h={50} m={5} w={20} />
          <View borderColor={"white"} backgroundColor={"red.100"} borderWidth={1} h={50} m={5} w={20} />
          <View borderColor={"white"} backgroundColor={"red.200"} borderWidth={1} h={50} m={5} w={20} />
          <View borderColor={"white"} backgroundColor={"red.300"} borderWidth={1} h={50} m={5} w={20} />
          <View borderColor={"white"} backgroundColor={"red.400"} borderWidth={1} h={50} m={5} w={20} />
        </ScrollView>
      </View>

    </ScrollView>
  );
}

export default DetailsScreen;
