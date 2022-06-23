export interface ResponsePlantList {
  PlantCode: number
  PlantDesc: string
  PlantPower: number
  PlantXPos: number
  PlantYPos: number
}

export interface ResponsePlantDetail {
  PlantCode: number
  PlantDesc: string
  PlantInstantPower: number
  PlantLastCom: string
  PlantDailyProd: number
  PlantMonthlyProd: number
  PlantYearlyProd: number
  PlantAddress: string
  PlantLatitude: number
  PlantLongitude: number
}

export interface ResponsePlantGraphs {
  PlantCode: number
  PlantDesc: string
  PlantIntradayData: Array<number>
  PlantIntradayDataIrr: Array<number>
  PlantIntradayDateTime: Array<string>
  PlantDailyProd: Array<number>
  PlantDailyDateTime: Array<string>
  PlantMonthlyProd: Array<number>
  PlantMonthlyExpectedProd: Array<number>
  PlantMonthlyMonthName: Array<string>
}
