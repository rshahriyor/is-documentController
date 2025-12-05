import { Component, output, signal } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { TextareaModule } from 'primeng/textarea';
import { FloatLabel } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { FileUpload } from 'primeng/fileupload';
import { FileType } from '@/core/enums/file.enum';

interface UploadedFile {
  file: File;
  type: FileType;
  icon: string;
}

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
  files: UploadedFile[] = [];

  iconsMap: any = {
    [FileType.IMAGE]: 'pi pi-image',
    [FileType.PDF]: 'pi pi-file-pdf',
    [FileType.WORD]: 'pi pi-file-word',
    [FileType.EXCEL]: 'pi pi-file-excel',
    [FileType.ARCHIVE]: 'pi pi-file-zip',
    [FileType.OTHER]: 'pi pi-file'
  };

  send(): void {
    this.sendLoading.set(true);
    setTimeout(() => {
      this.sendLoading.set(false)
    }, 3000)
  }

  myUpload(event: any) {
    const oldFiles: File[] = this.files.map(f => f.file);

    const newFiles: File[] = Array.from(event.files);

    const allFiles = [...oldFiles, ...newFiles];

    this.files = allFiles.map((file: File) => {
      const type = this.getFileType(file);
      return {
        file,
        type,
        icon: this.iconsMap[type]
      };
    });
  }

  removeFile(file: any) {
    const exist = this.files.indexOf(file);
    this.files.splice(exist, 1)
  }

  getFileType(file: File): FileType {
    const type = file.type;

    if (type.startsWith('image/')) return FileType.IMAGE;
    if (type === 'application/pdf') return FileType.PDF;
    if (type === 'application/msword'
      || type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')
      return FileType.WORD;
    if (type === 'application/vnd.ms-excel'
      || type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
      return FileType.EXCEL;
    if (type.includes('zip') || type.includes('rar')) return FileType.ARCHIVE;

    return FileType.OTHER;
  }
}
