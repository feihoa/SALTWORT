import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';
import { Home } from './features/components/home/home';
import { Wrapper } from './features/components/wrapper/wrapper';
import { initialApps } from './initial-apps';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    pathMatch: 'full'
  },
  {
    path: '',
    component: Wrapper,
    children: [
      ...initialApps.map(app => ({
        path: app.routePath,
        loadComponent: () => loadRemoteModule(app.name, './Component').then(m => m.App),
        data: { name: app.displayName },
      }))
    ]
  },
  { path: '**', redirectTo: '' }
  // DO NOT insert routes after this one.
  // { path:'**', ...} needs to be the LAST one.
];