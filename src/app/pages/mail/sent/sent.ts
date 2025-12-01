import { Component, DestroyRef, inject, signal } from '@angular/core';
import { PageTitle } from "@/shared/components/page-title/page-title";
import { TableModule } from "primeng/table";
import { RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MailService } from '../mail.service';
import { CommonModule } from '@angular/common';
import { ComposeButton } from "@/shared/components/compose-button/compose-button";

@Component({
  selector: 'app-sent',
  imports: [PageTitle, TableModule, RouterLink, CommonModule, ComposeButton],
  templateUrl: './sent.html',
  styleUrl: './sent.scss'
})
export class Sent {
  cols: any[] = [
    { name: 'Отправлено' },
    { name: 'Сообщение' },
    { name: 'Дата и время' },
    { name: 'Число прочитанных' }
  ];

  messages = signal([]);

  private service = inject(MailService);
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.getMessages();
  }

  private getMessages(): void {
    this.service.getMessages()
    .pipe(
      takeUntilDestroyed(this.destroyRef)
    )
    .subscribe((res) => {
      this.messages.set(res);
    })
  }

}
