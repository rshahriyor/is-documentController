import { Component, output, signal } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { TextareaModule } from 'primeng/textarea';
import { FloatLabel } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { FileUpload } from 'primeng/fileupload';

@Component({
  selector: 'app-compose-modal',
  imports: [Dialog, TextareaModule, FloatLabel, ButtonModule, FileUpload],
  templateUrl: './compose-modal.html',
  styleUrl: './compose-modal.scss'
})
export class ComposeModal {
  close = output<boolean>();
  visible = signal(true);
  sendLoading = signal(false);
  files: File[] = [];

  send(): void {
    this.sendLoading.set(true);
    setTimeout(() => {
      this.sendLoading.set(false)
    }, 3000)
  }

  myUpload(event: any) {
    this.files = event.files;
    console.log('Выбранные файлы:', this.files);
  }

  uploadFiles() {
    if (!this.files.length) return;

    this.files.forEach(file => {
      console.log('Загружаем файл:', file.name);
    });

    this.files = [];
  }
}
