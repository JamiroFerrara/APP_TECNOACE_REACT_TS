import { HStack, ScrollView, Text, Center, View, Pressable } from "native-base";
import { MotiView } from "moti";
import MapView from "react-native-maps";
import BackArrow from "../components/BackArrow/BackArrow";
import WeatherContainer from "../components/Weather/WeatherContainer";
import WeatherDetailItem from "../components/Weather/WeatherDetailItem";

interface Props {
  navigation: any;
}

const padding = 5;

function DetailsScreen(props: Props) {
  const { navigation } = props;

  return (
    <>
      <Center p={3}>
        <Text fontSize={25}>Impianto</Text>
        <BackArrow onPress={() => navigation.goBack()} />
      </Center>

      <ScrollView>
        <MapView style={{ height: 160, borderRadius: 50 }} />

        <MotiView from={{ opacity: 0, translateX: 10 }} animate={{ opacity: 1, translateX: 0 }} transition={{ type: "timing", duration: 350 }} >
          <Pressable mx={2} borderWidth={1} borderColor="text.900" p={padding} mt={5} borderRadius={10} backgroundColor={"blueGray.700"} >
            <Text fontSize={23} mb={2}> Dettaglio Impianti </Text>
            <WeatherDetailItem title="Produzione Istantanea" value="20340" measure="kvh" />
            <WeatherDetailItem title="Produzione Mensile" value="1394" measure="kvh" />
            <WeatherDetailItem title="Produzione Annua" value="22999" measure="kvh" />
          </Pressable>
        </MotiView>

        <WeatherContainer />
      </ScrollView>
    </>
  );
}

export default DetailsScreen;
