import WeatherScroll from './WeatherScroll'
import { View, Text, Center} from 'native-base'
import {ActivityIndicator} from 'react-native'
import { MotiView} from 'moti'
import WeatherDetailItem from './WeatherDetailItem'
import {useWeather} from '../../hooks/useWeather'

export default function WeatherContainer(){
  const weatherData = useWeather()

  if (Object.keys(weatherData).length){ //is object empty..
  const humidity = weatherData.current.humidity
  const clouds = weatherData.current.cloud
  const precipitation = weatherData.current.precip_mm
  const pressure = weatherData.current.pressure_mb
  const uv = weatherData.current.uv

    return (
      <>
        <View pb={5} borderBottomWidth={2} borderColor={"text.500"}>
          <Text padding={5} fontSize={20} mb={2}>Meteo</Text>
          <WeatherScroll weatherData={weatherData}/>
        </View>

          <MotiView from={{ opacity: 0}} animate={{ opacity: 1}} transition={{ type: "timing", duration: 800, }} >
            <Text p={5} fontSize={20}>Dettagli</Text>

            <View mx={2} px={5} borderRadius={10} >
              <WeatherDetailItem title='Umidità:' value={humidity} measure='%'/>
              <WeatherDetailItem title='Nuvole:' value={clouds} measure='%'/>
              <WeatherDetailItem title='Precipitazioni:' value={precipitation} measure='mm'/>
              <WeatherDetailItem title='Pressione:' value={pressure} measure='mb'/>
              <WeatherDetailItem title='Raggi UV:' value={uv} measure=''/>
            </View>
          </MotiView>

        <View h={5}/>
      </>
    )
  } else {
    return (
      <ActivityIndicator style={{marginTop: 20}} size={60} color="#FFFFFF"/>
    )
  }
}
