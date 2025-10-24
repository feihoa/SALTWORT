import { Type } from "@angular/core";

export type Status = 'pending' | 'success' | 'error';

export interface AppItem {
  readonly name: string;
  readonly routePath: string;
  readonly displayName: string;
  component?: { App: Type<any> };
  status: Status;
  readonly port: number;
  errorReason?: string;
}