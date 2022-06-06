import { ScrollView, Text, View, Image, VStack, HStack } from "native-base";
import GradientBox from '../GradientBox/GradientBox'
import {colors} from '../../theme'

interface Props{
    weatherData: any
}

export default function WeatherScroll(props: Props) {
  const {weatherData} = props

  if (Object.keys(weatherData).length){ //is object empty..
  //Split hook data
  const weatherToday = weatherData.forecast.forecastday[0].day
  const weatherHour = weatherData.forecast.forecastday[0].hour.splice(new Date().getHours(), 24)
  const avgTemperature = weatherToday.avgtemp_c
  const todayIcon = weatherToday.condition.icon

    return (
      <>
        <GradientBox mx={70} mb={10} color1={colors.primary[800]} color2={colors.primary[900]}>
          <HStack borderRadius={25} alignSelf={"center"}>
            <Text fontSize={40}>{avgTemperature}</Text>
            <Text>c</Text>
            <Image src={"http:" + todayIcon} ml={7} height={16} width={16} alt="Current Weather"/>
          </HStack>
        </GradientBox>

        <ScrollView alignSelf={"center"} horizontal={true} zIndex={20} nestedScrollEnabled={true}>
          {weatherHour.map((hour:any) => {return (
            <VStack>
              <View borderBottomWidth={1} borderColor="text.600" mb={2}>
                <Image src={"http:" + hour.condition.icon} height={12} width={12} alt="Current Weather"/>
              </View>
              <Text alignSelf={"center"}>{hour.time.substring(11)}</Text>
            </VStack>
          )})}
        </ScrollView>
      </>
    )
  } else {
      return <View/>
  }
}
