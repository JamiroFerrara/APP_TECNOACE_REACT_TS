import WeatherContainer from '../components/Weather/WeatherContainer'
import NavigationHeader from '../components/NavigationHeader/NavigationHeader'
import {View} from "native-base"

interface Props {
  navigation: any
}

export default function WeatherPage(props: Props){
  const {navigation} = props
  return(
    <>
      <NavigationHeader navigation={navigation} title="Weather"/>
      <View h={"30"}/>
      <WeatherContainer navigation={navigation}/>
    </>
  )
}
