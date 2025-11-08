import { Type } from "@angular/core";

export type Status = 'pending' | 'success' | 'error';

export interface AppItem {
  readonly name: string;
  readonly routePath: string;
  readonly displayName: string;
  readonly port: number;
  status: Status;
  component?: { App: Type<any> };
  errorReason?: string;
}