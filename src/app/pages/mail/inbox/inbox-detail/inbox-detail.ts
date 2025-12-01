import { Component, DestroyRef, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { Back } from "@/shared/components/back/back";
import { ButtonModule } from 'primeng/button';
import { IMessage, MailService } from '../../mail.service';

@Component({
  selector: 'app-inbox-detail',
  imports: [CardModule, CommonModule, Back, ButtonModule],
  templateUrl: './inbox-detail.html',
  styleUrl: './inbox-detail.scss'
})
export class InboxDetail implements OnInit {

  messageId: WritableSignal<number | null> = signal(null);
  message: WritableSignal<IMessage> = signal({});

  private service = inject(MailService);
  private destroyRef = inject(DestroyRef);
  private activeRoute = inject(ActivatedRoute);

  constructor() {
    const { id } = this.activeRoute.snapshot.params;
    this.messageId.set(id);
  }

  ngOnInit(): void {
    this.getMessageById();
  }

  markAsRead(): void {
    this.message().read = !this.message().read;
    this.service.markAsRead(this.messageId(), this.message())
    .pipe(
      takeUntilDestroyed(this.destroyRef)
    )
    .subscribe((res) => {
      this.message.set(res);
      console.log(this.message());
      
    })
  }

  private getMessageById(): void {
    this.service.getMessageById(this.messageId())
    .pipe(
      takeUntilDestroyed(this.destroyRef)
    )
    .subscribe((res) => {
      this.message.set(res);
    })
  }

}
