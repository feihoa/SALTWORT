import { InjectionToken } from "@angular/core";
import { IWidget } from "../models/widget";

export const WIDGET = new InjectionToken<IWidget>('widget');