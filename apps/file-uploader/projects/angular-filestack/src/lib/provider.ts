import { InjectionToken, makeEnvironmentProviders } from "@angular/core";
import { Client, ClientOptions, init, PickerOptions } from "filestack-js";

export const FILESTACK_CLIENT = new InjectionToken<Client>('Filestack Client');
export const FILESTACK_BASE_PICKER_OPTIONS = new InjectionToken<PickerOptions>('Filestack Options');

export function provideFileStack(apiKey: string, options?: ClientOptions) {
  return makeEnvironmentProviders([
    {
      provide: FILESTACK_CLIENT,
      useFactory: () => init(apiKey, options),
    }]
  )
}