import WeatherScroll from "./WeatherScroll";
import { View, Text } from "native-base";
import { ActivityIndicator } from "react-native";
import { MotiView } from "moti";
import WeatherDetailItem from "./WeatherDetailItem";
import { useWeather } from "../../hooks/useWeather";

interface Props{
  navigation: any
  lat: string
  long: string
}

export default function WeatherContainer(props: Props) {
  const {navigation, lat, long} = props
  const weatherData = useWeather(lat,long);

  if (Object.keys(weatherData).length) {
    //is object empty..
    const humidity = weatherData.current.humidity;
    const clouds = weatherData.current.cloud;
    const precipitation = weatherData.current.precip_mm;
    const pressure = weatherData.current.pressure_mb;
    const uv = weatherData.current.uv;

    return (
      <>
        <MotiView
          from={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "timing", duration: 800 }}
        >
          <View pb={5} borderBottomWidth={2} borderColor={"text.500"}>
            <Text pb={5} pl={5} pt={2} fontSize={20} mb={2}>
              Meteo
            </Text>

            <WeatherScroll weatherData={weatherData} navigation={navigation}/>
          </View>

          <View>
            <Text p={5} fontSize={20}>
              Dettagli
            </Text>

            <View mx={2} px={5} borderRadius={10}>
              <WeatherDetailItem title="Umidità:" value={humidity} measure="%" />
              <WeatherDetailItem title="Nuvole:" value={clouds} measure="%" />
              <WeatherDetailItem title="Precipitazioni:" value={precipitation} measure="mm" />
              <WeatherDetailItem title="Pressione:" value={pressure} measure="mb" />
              <WeatherDetailItem title="Raggi UV:" value={uv} measure="" />
            </View>
          </View>
        </MotiView>

        <View h={5} />
      </>
    );
  } else {
    return (
      <ActivityIndicator style={{ marginTop: 150 }} size={60} color="#FFFFFF" />
    );
  }
}
