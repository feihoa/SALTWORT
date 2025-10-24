import { loadRemoteModule } from "@angular-architects/native-federation";
import { Injectable, signal } from "@angular/core";
import { catchError, concatMap, from, map, Observable, of, tap } from 'rxjs';
import { initialApps } from "../../initial-apps";
import { AppItem, Status } from "../models/app";


@Injectable({ providedIn: 'root' })
export class Apps {
  apps = signal<AppItem[]>(initialApps);

  loadApps(): Observable<Partial<AppItem>> {
    return from(this.apps()).pipe(
      concatMap(app => from(loadRemoteModule(app.name, './Component'))
        .pipe(
          tap(m => console.log(m)),
          map(module => ({
            name: app.name,
            component: module,
            status: 'success' as Status,
          })),
          catchError(err => of({
            name: app.name,
            status: 'error' as Status,
            errorReason: err,
          }))
        )
      )
    )
  }

  updateAppData(app: Partial<AppItem>) {
    this.apps.update(arr => {
      let appIndex = arr.findIndex(ap => ap.name === app.name);
      if (appIndex === -1) {
        throw new Error('This App does not listed in initialApps');
      }
      return [
        ...arr.slice(0, appIndex),
        { ...arr[appIndex], ...app },
        ...arr.slice(appIndex + 1)
      ];;
    });
  }

}