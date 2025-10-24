import { AppItem } from "./core/models/app";

export const initialApps: AppItem[] = [
  {
    name: 'bridge-pattern',
    routePath: 'bridge-pattern',
    displayName: 'Bridge pattern',
    port: 4201,
    status: "pending"
  },
  {
    name: 'fail',
    routePath: 'fail',
    displayName: 'This app does not exist',
    port: 4202,
    status: "pending"
  },
];