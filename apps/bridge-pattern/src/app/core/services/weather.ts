import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { delay, map, Observable, tap } from "rxjs";
import { environment } from "../../../environments/environment";
import { Period, WeatherData } from "../models/weather";
import { Cache } from "./cache";

@Injectable({ providedIn: 'root' })
export class Weather {

  private readonly weatherApi = environment.weatherApi;
  private readonly http = inject(HttpClient);

  private readonly cache = inject(Cache);

  getForcast(): Observable<Period> {
    const url = this.weatherApi + '/gridpoints/AKQ/97,39/forecast';

    const cached = this.cache.get(url);
    console.log(cached)
    if (cached) return cached.pipe(delay(1000));

    return this.http.get<WeatherData>(url)
      .pipe(
        map(data => data.properties.periods[0]),
        tap(data => this.cache.set(data, url)),
      )
  }

}