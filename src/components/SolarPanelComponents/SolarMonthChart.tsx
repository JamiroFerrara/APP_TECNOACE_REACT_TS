import {
  LineChart
} from "react-native-chart-kit";
import { View } from "native-base";
import { Dimensions } from "react-native";
import { colors } from '../../theme'

interface Props {
  chartData: any
  chartDates: any
}

export default function SolarDayChart(props: Props) {
  const {chartData, chartDates} = props;
  console.log(chartDates[0].length);

  return (
    <View mt={5}>
      <LineChart
        data={{
          labels: [
            chartDates[0].substring(0, 3),
            chartDates[1].substring(0, 3),
            chartDates[2].substring(0, 3),
            chartDates[3].substring(0, 3),
            chartDates[4].substring(0, 3),
            chartDates[5].substring(0, 3),
            chartDates[6].substring(0, 3),
            chartDates[7].substring(0, 3),
            chartDates[8].substring(0, 3),
            chartDates[9].substring(0, 3),
            chartDates[10].substring(0, 3),
            chartDates[11].substring(0, 3)
          ],
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
                chartData[7],
                chartData[8],
                chartData[9],
                chartData[10],
                chartData[11],
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
            strokeWidth: "1",
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
