import {
  LineChart,
} from "react-native-chart-kit";
import { View } from "native-base";
import { Dimensions } from "react-native";
import { colors } from '../../theme'

interface Props {
  chartData: any
  chartDates: any
}

export default function SolarDayChart(props: Props) {
  const {chartData, chartDates} = props

  return (
    <View mt={5}>
      <LineChart
        data={{
          labels: ["Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"],
          datasets: [
            {
              data: [
                chartData[0],
                chartData[1],
                chartData[2],
                chartData[3],
                chartData[4],
                chartData[5],
                chartData[6],
              ],
            },
          ],
        }}
        width={Dimensions.get("window").width - 25} // from react-native
        height={220}
        yAxisLabel=""
        yAxisSuffix=""
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: colors.primary[900],
          backgroundGradientFrom: colors.primary[900],
          backgroundGradientTo: colors.primary[800],
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: colors.blue[800],
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
}
