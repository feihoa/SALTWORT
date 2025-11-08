import { Component, inject, signal } from '@angular/core';
import { FileStack } from 'angular-filestack';
import { PickerFileMetadata } from 'filestack-js';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  uploads = signal<PickerFileMetadata[]>([]);

  #client = inject(FileStack);

  #picker = this.#client.configurePicker({
    onUploadDone: (result) => this.onFilesUploaded(result.filesUploaded),
  })

  openPicker() {
    this.#picker.open();
  }

  onFilesUploaded(newUploads: PickerFileMetadata[]) {
    this.uploads.update(curr => [...curr, ...newUploads]);
  }

  onRemove(id: number) {
    this.uploads.update(arr => arr.filter((_, i) => i !== id));
  }
}
