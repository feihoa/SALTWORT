import { loadRemoteModule } from "@angular-architects/native-federation";
import { Injectable, signal } from "@angular/core";
import { catchError, concatMap, from, map, Observable, of, tap } from 'rxjs';
import { initialApps } from "../../initial-apps";
import { AppItem, Status } from "../models/app";


@Injectable({ providedIn: 'root' })
export class Apps {
  apps = signal<AppItem[]>(initialApps, { equal: () => false });

  loadApps(): Observable<Partial<AppItem>> {
    return from(this.apps()).pipe(
      concatMap(app => from(loadRemoteModule(app.name, './Component'))
        .pipe(
          tap(m => console.log(m)),
          map(module => ({
            name: app.name,
            component: module,
            status: <Status>'success',
          })),
          catchError(err => of({
            name: app.name,
            status: <Status>'error',
            errorReason: err,
          }))
        )
      )
    )
  }

  updateAppData(app: Partial<AppItem>) {
    const appIndex = this.apps().findIndex(ap => ap.name === app.name);
    if (appIndex === -1) {
      throw new Error(`${app.displayName ?? 'App'} does not listed in the initialApps!`);
    }

    if (this.apps()[appIndex].status === app.status) {
      return;
    }

    this.apps.update(arr => {
      arr[appIndex] = { ...arr[appIndex], ...app };
      return arr;
    });
  }

}