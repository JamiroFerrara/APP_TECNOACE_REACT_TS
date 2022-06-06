import { Box } from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import { MotiView } from "moti";

interface Props {
  color1: string;
  color2: string;
  children: any;
  mx?: number
  mt?: number
  mb?: number
}

export default function GradientBox(props: Props) {
  const { color1, color2, children, mx, mt,mb } = props;

  return (
    <MotiView
      from={{ opacity: 0, translateX: 10 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ type: "timing", duration: 350 }}
    >
      <Box
        mx={mx}
        mb={mb}
        borderWidth={1}
        borderColor="text.900"
        mt={mt}
        borderRadius={10}
      >
        <LinearGradient
          colors={[color1, color2]}
          style={{ borderRadius: 10, padding: 10 }}
        >
          {children}
        </LinearGradient>
      </Box>
    </MotiView>
  );
}
