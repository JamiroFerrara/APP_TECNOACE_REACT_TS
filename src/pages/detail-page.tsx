import {
  ScrollView,
  Text,
} from "native-base";
import MapView from "react-native-maps";
import WeatherContainer from "../components/Weather/WeatherContainer";
import WeatherDetailItem from "../components/Weather/WeatherDetailItem";
import SolarSelector from "../components/SolarPanelComponents/SolarSelector";
import {colors} from '../theme'
import GradientBox from "../components/GradientBox/GradientBox";
import NavigationHeader from '../components/NavigationHeader/NavigationHeader'

interface Props {
  navigation: any;
}

function DetailsScreen(props: Props) {
  const { navigation } = props;

  return (
    <>
      <NavigationHeader title="Impianto" navigation={navigation}/>

      <ScrollView>
        <MapView style={{ height: 160, borderRadius: 50 }} />

        <GradientBox mx={2} mt={5} color1={colors.primary[800]} color2="transparent">

          <Text fontSize={23} mb={2}> Dettaglio Impianti </Text>

          <WeatherDetailItem title="Produzione Istantanea" value="20340" measure="kvh" />
          <WeatherDetailItem title="Produzione Mensile" value="1394" measure="kvh" />
          <WeatherDetailItem title="Produzione Annua" value="22999" measure="kvh" />
        </GradientBox>

        <SolarSelector />

        <WeatherContainer />
      </ScrollView>
    </>
  );
}

export default DetailsScreen;
