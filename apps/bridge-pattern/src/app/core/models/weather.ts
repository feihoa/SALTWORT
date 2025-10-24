export interface Period {
  startTime: Date;
  endTime: Date;
  temperature: number;
  probabilityOfPrecipitation: { value: number };
  windSpeed: string;
  windDirection: "W" | "N" | "S" | "E";
  detailedForecast: string;
  icon: string;
  isDaytime: boolean;
}

export interface WeatherData {
  properties: {
    periods: Period[]
  }
}