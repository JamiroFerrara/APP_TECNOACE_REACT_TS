import * as React from "react";
import { useState } from "react";
import { Image, Pressable, Center } from "native-base";
import { getRandomItem } from "../../utils/utils";
import { colors } from "../../theme";

const bannerSources = [
  "https://www.tecnoace.eu/wp-content/uploads/2018/10/manutenzione-impianti-fotovoltaici-brescia-1024x768.jpg",
  "https://www.tecnoace.eu/wp-content/uploads/2018/10/manutenzione-impianti-fotovoltaici-valsabbia-1024x758.jpg",
  "https://www.tecnoace.eu/wp-content/uploads/2018/10/manutenzione-impianti-fotovoltaici-lago-di-garda-1024x614.jpg",
  "https://www.tecnoace.eu/wp-content/uploads/2018/10/manutenzione-impianti-fotovoltaici-brescia-e-provincia-1024x768.jpg",
  "https://www.tecnoace.eu/wp-content/uploads/2018/10/pannelli-solari-brescia-1024x771.jpg",
];

const logoSource =
  "https://res.cloudinary.com/tecnoace/image/upload/v1653644015/TecnoaceNOBG_jh64ay.png";

const bannerHeight = 200;
const imgOffset = 10;
const radius = 1000;

export default function ImageBanner() {
  const [refresh, setRefresh] = useState(true);

  function handlePress() {
    setRefresh(!refresh);
  }

  return (
    <Pressable onPress={() => handlePress()}>

      <Center>
        <Image
          height="120"
          w="120"
          source={{ uri: logoSource }}
          alt="banner"
        ></Image>
      </Center>
    </Pressable>
  );
}
