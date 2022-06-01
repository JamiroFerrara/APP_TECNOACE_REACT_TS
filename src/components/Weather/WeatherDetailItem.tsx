import { Text, HStack } from "native-base";

interface Props {
  title: string;
  value: string;
  measure: string;
}

export default function WeatherDetailItem(props: Props) {
  const { title, value, measure } = props;

  return (
    <HStack>
      <Text w={220} fontSize={15} color={"text.400"}>
        {title}
      </Text>
      <Text mr={2} fontSize={15} color={"text.200"}>
        {value}
      </Text>
      <Text fontSize={15} color={"text.200"}>
        {measure}
      </Text>
    </HStack>
  );
}
