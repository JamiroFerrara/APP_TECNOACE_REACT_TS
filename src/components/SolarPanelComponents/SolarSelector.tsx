import { View, Text, HStack, VStack, Center } from "native-base";
import SolarPill from "./SolarSelectorPill";
import { useState } from "react";
import SolarDayChart from './SolarDayChart'
import SolarWeekChart from './SolarWeekChart'
import SolarMonthChart from './SolarMonthChart'

export default function SolarSelector() {
  const [index, setIndex] = useState(1);

  function ItemPressed(index: number) {
    setIndex(index);
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
      return <SolarDayChart/>;
    case 2:
      return <SolarWeekChart/>;
    case 3:
      return <SolarMonthChart/>;
  }

  return <Text fontSize={40}>???</Text>;
}

function isSelected(index: number, pillIndex: number){
  if (index == pillIndex)
    return true
  else 
    return false
}
