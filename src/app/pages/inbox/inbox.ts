import { PageTitle } from '@/shared/components/page-title/page-title';
import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { InboxService } from './inbox.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-inbox',
  imports: [TableModule, CommonModule, CardModule, PageTitle, RouterLink],
  templateUrl: './inbox.html',
  styleUrl: './inbox.scss'
})
export class Inbox implements OnInit {
  cols: any[] = [
    { name: 'ФИО' },
    { name: 'Сообщение' },
    { name: 'Дата и время' }
  ];

  messages = signal([]);

  private service = inject(InboxService);
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
