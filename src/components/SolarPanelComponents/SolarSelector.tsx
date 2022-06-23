import { View, Text, HStack, VStack, Center } from "native-base";
import SolarPill from "./SolarSelectorPill";
import { useState, useEffect } from "react";
import SolarDayChart from './SolarDayChart'
import SolarWeekChart from './SolarWeekChart'
import SolarMonthChart from './SolarMonthChart'
import { GetPlantProductionForGraphs } from '../../server/signalr'
import { ActivityIndicator } from 'react-native'

let plantData: any;

interface Props {
  plantID: number
}

export default function SolarSelector(props: Props) {
  const {plantID} = props
  const [index, setIndex] = useState(1);
  const [isLoading, setisLoading] = useState(true)

  useEffect(()=> {
    const getGraphData = async () => {
      var res = await GetPlantProductionForGraphs(plantID);
      plantData = res;
      setisLoading(false);
    }
    getGraphData();
  })

  function ItemPressed(index: number) {
    setIndex(index);
  }

  if (isLoading){
      return(
      <Center h="40">
        <ActivityIndicator size={60} color="#FFFFFF"/>
      </Center>
      )
  }

  return (
    <Center p={3} mt={5}>
      <HStack space={5}>
        <SolarPill isSelected={isSelected(index,1)} onPress={() => ItemPressed(1)} text="Giornaliero" />
        <SolarPill isSelected={isSelected(index,2)} onPress={() => ItemPressed(2)} text="Settimanale" />
        <SolarPill isSelected={isSelected(index,3)} onPress={() => ItemPressed(3)} text="Mensile" />
      </HStack>

        {getIndexedComponent(index)}
    </Center>
  );
}

function getIndexedComponent(index: number) {
  switch (index) {
    case 1:
      return <SolarDayChart chartData={plantData.plantIntradayData}/>;
    case 2:
      return <SolarWeekChart chartDates={plantData.plantDailyDateTime} chartData={plantData.plantDailyProd}/>;
    case 3:
      return <SolarMonthChart chartDates={plantData.plantMonthlyMonthName} chartData={plantData.plantMonthlyProd}/>;
  }

  return <Text fontSize={40}>???</Text>;
}

function isSelected(index: number, pillIndex: number){
  if (index == pillIndex)
    return true
  else 
    return false
}
