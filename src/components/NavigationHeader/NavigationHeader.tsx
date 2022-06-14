import { Center, Text } from "native-base";
import BackArrow from './BackArrow'
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../../theme";

interface Props {
  title: string;
  navigation?: any;
}

export default function NavigationHeader(props: Props) {
  const { navigation, title } = props;

  return (
    <LinearGradient
      colors={[colors.primary[900], colors.primary[800]]}
      style={{
        borderColor: "black",
        opacity: 0.95,
      }}
    >
      <Center p={3}>
        <Text fontSize={25}>{title}</Text>
        <BackArrow onPress={() => navigation.goBack()} />
      </Center>
    </LinearGradient>
  );
}
