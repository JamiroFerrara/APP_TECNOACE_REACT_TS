import * as React from "react";
import { useState } from "react";
import { Input, Icon, FormControl, VStack } from "native-base";
import { MotiView } from "moti";
import { UserIcon, PasswordIcon } from "../../utils/icons";
import { colors } from "../../theme";
import ImageBanner from "../ImageBanner/ImageBanner";
import AnimatedButton from "../AnimatedButton/AnimatedButton";
import { LinearGradient } from "expo-linear-gradient";
import {InitConnection} from '../../utils/SignalR'

interface Props {
  navigation: any;
}

export default function LoginForm(props: Props) {
  const { navigation } = props;
  const [isPasswordError, setPasswordError] = useState(false);

  function handleButtonPress() {
    setPasswordError(isPasswordError);
    navigation.navigate("Impianti");
    InitConnection();
  }

  return (
    <>
      <MotiView
        style={{ paddingTop: 120 }}
        from={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "timing",
          duration: 350,
        }}
      >
        <LinearGradient
          colors={[colors.primary[700], colors.primary[900]]}
          style={{
            borderRadius: 10,
            padding: 10,
            margin: 25,
            borderColor: "black",
          }}
        >
          <VStack space={3} opacity={0.95} p={10} borderRadius={10}>
            <ImageBanner />

            <FormControl isInvalid={isPasswordError}>
              <Input
                placeholder="Username"
                variant="underlined"
                placeholderTextColor={colors.primary[100]}
                InputLeftElement={<Icon as={UserIcon} size={5} ml="2" />}
              />
              {getErrorMessage("Utente Errato")}
            </FormControl>

            <FormControl isInvalid={isPasswordError}>
              <Input
                mt={2}
                placeholder="Password"
                placeholderTextColor={colors.primary[100]}
                variant="underlined"
                InputLeftElement={<Icon as={PasswordIcon} size={5} ml="2" />}
              />
              {getErrorMessage("Password Errata")}
            </FormControl>

            <AnimatedButton
              activeColor={colors.blue[600]}
              inactiveColor={colors.blue[500]}
              handleButtonPress={handleButtonPress}
            />
          </VStack>
        </LinearGradient>
      </MotiView>
    </>
  );
}

function getErrorMessage(message: string) {
  return <FormControl.ErrorMessage>{message}</FormControl.ErrorMessage>;
}
