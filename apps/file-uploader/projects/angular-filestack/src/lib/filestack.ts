import { inject, Injectable } from "@angular/core";
import { PickerOptions } from "filestack-js";
import { FILESTACK_BASE_PICKER_OPTIONS, FILESTACK_CLIENT } from "./provider";

@Injectable({
  providedIn: 'root',
})
export class FileStack {

  #client = inject(FILESTACK_CLIENT);
  #defaultPickerOptions: PickerOptions = inject(FILESTACK_BASE_PICKER_OPTIONS, { optional: true }) ?? {};

  configurePicker(options?: PickerOptions) {
    const mergedOptions: PickerOptions = {
      ...this.#defaultPickerOptions,
      ...options,
    }

    return this.#client.picker(mergedOptions);
  }
}