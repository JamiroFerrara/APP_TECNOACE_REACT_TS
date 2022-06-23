import {
  LineChart,
} from "react-native-chart-kit";
import { View } from "native-base";
import { Dimensions } from "react-native";
import { colors } from '../../theme'

interface Props {
  chartData?: any
}

export default function SolarDayChart(props: Props) {
  const {chartData} = props
  const arrLength = chartData.length;
  const arrSplit = Math.round(arrLength / 6);

  console.log(arrLength, arrSplit);
  console.log(chartData[arrSplit]);
  console.log(chartData[arrSplit * 2])

  return (
    <View mt={5}>
      <LineChart
        data={{
          labels: ["04:00", "08:00", "12:00", "16:00", "20:00", "24:00"],
          datasets: [
            {
              data: [
                chartData[arrSplit * 1],
                chartData[arrSplit * 2],
                chartData[arrSplit * 3],
                chartData[arrSplit * 4],
                chartData[arrSplit * 5],
              ]
            },
          ],
        }}
        width={Dimensions.get("window").width - 25} // from react-native
        height={220}
        yAxisLabel=""
        yAxisSuffix=" kvH"
        yAxisInterval={2} // optional, defaults to 1
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
