import { ScrollView, Text } from "native-base";
import MapView, { Marker } from "react-native-maps";
import WeatherContainer from "../components/Weather/WeatherContainer";
import WeatherDetailItem from "../components/Weather/WeatherDetailItem";
import SolarSelector from "../components/SolarPanelComponents/SolarSelector";
import { colors } from "../theme";
import GradientBox from "../components/GradientBox/GradientBox";
import NavigationHeader from "../components/NavigationHeader/NavigationHeader";
import { useState, useEffect } from 'react'
import { ActivityIndicator, Platform } from 'react-native'
import {Center} from 'native-base'
import { GetPlantDetail } from '../server/signalr'
import { ResponsePlantDetail} from '../server/tace_interfaces'

const MarginTop = Platform.OS === 'ios' ? 35 : 0

let plant: any;

interface Props {
  navigation: any
  route: any
}

function DetailsScreen(props: Props) {
  const { navigation, route } = props;
  const {plantID} = route.params;
  const [isLoading, setisLoading] = useState(true)

  useEffect(()=> {
    if (isLoading){
      const getPlantData = async () => {
        plant = await GetPlantDetail(plantID);
        setisLoading(false);
      }

      getPlantData();
    }
  })

  if (isLoading){
      return (
      <Center h="full">
        <ActivityIndicator size={60} color="#FFFFFF"/>
      </Center>
      )
  } else {
    return (
      <>
        <NavigationHeader mt={MarginTop} title={plant.plantDesc} navigation={navigation} />

        <ScrollView>
          <MapView style={{ height: 160, borderRadius: 50 }}
            region={{ latitude: Number(plant.plantLatitude), longitude: Number(plant.plantLongitude), latitudeDelta: 0.0922, longitudeDelta: 0.0421, }} >
            <Marker coordinate={{ latitude: Number(plant.plantLatitude), longitude: Number(plant.plantLongitude) }} />
          </MapView>

          <GradientBox mx={2} mt={5} color1={colors.primary[800]} color2="transparent" >
            <Text fontSize={23} mb={2}> {" "} Dettaglio Impianti{" "} </Text>

            <WeatherDetailItem title="Produzione Istantanea" value={plant.plantInstantPower} measure="kWh" />
            <WeatherDetailItem title="Produzione Giornaliera" value={plant.plantDailyProd} measure="kWh" />
            <WeatherDetailItem title="Produzione Mensile" value={plant.plantMonthlyProd} measure="kWh" />
            <WeatherDetailItem title="Produzione Annua" value={plant.plantYearlyProd} measure="kWh" />
          </GradientBox>

          <SolarSelector plantID={plantID}/>

          <WeatherContainer navigation={navigation} lat={plant.plantLatitude} long={plant.plantLongitude}/>
        </ScrollView>
      </>
    );
  }

}

export default DetailsScreen;
