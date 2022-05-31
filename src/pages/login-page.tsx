import * as React from "react";
import LoginForm from "../components/LoginForm/LoginForm";
import { Image } from "native-base";
import { getRandomItem } from "../utils/utils";

const bannerSources = [
  "https://www.tecnoace.eu/wp-content/uploads/2018/10/manutenzione-impianti-fotovoltaici-brescia-1024x768.jpg",
  "https://www.tecnoace.eu/wp-content/uploads/2018/10/manutenzione-impianti-fotovoltaici-valsabbia-1024x758.jpg",
  "https://www.tecnoace.eu/wp-content/uploads/2018/10/manutenzione-impianti-fotovoltaici-lago-di-garda-1024x614.jpg",
  "https://www.tecnoace.eu/wp-content/uploads/2018/10/manutenzione-impianti-fotovoltaici-brescia-e-provincia-1024x768.jpg",
  "https://www.tecnoace.eu/wp-content/uploads/2018/10/pannelli-solari-brescia-1024x771.jpg",
];

interface Props {
  navigation: any;
}

export default function LoginPage(props: Props) {
  const { navigation } = props;

  return (
    <>
      <Image
        opacity={0.6}
        position={"absolute"}
        src={getRandomItem(bannerSources)}
        alt=" "
        w={"full"}
        h={"full"}
        zIndex={0}
      />

      <LoginForm navigation={navigation} />

    </>
  );
}
