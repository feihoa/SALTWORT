import { AppItem, Status } from "./core/models/app";

export const initialApps: AppItem[] = [
  {
    name: 'bridge-pattern',
    routePath: 'bridge-pattern',
    displayName: 'Bridge pattern',
    port: 4201,
    status: <Status>'pending'
  },
  {
    name: 'fail',
    routePath: 'fail',
    displayName: 'This app does not exist',
    port: 4202,
    status: <Status>'pending'
  },
  {
    name: 'file-uploader',
    routePath: 'file-uploader',
    displayName: 'File uploader',
    port: 4203,
    status: <Status>'pending'
  },
];