import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { PageTitle } from "@/shared/components/page-title/page-title";
import { EmployeesService } from './employees.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-employees',
  imports: [TableModule, CommonModule, CardModule, PageTitle],
  templateUrl: './employees.html',
  styleUrl: './employees.scss'
})
export class Employees implements OnInit {
  cols: any[] = [
    { name: 'Изображение' },
    { name: 'Имя' },
    { name: 'Фамилия' },
    { name: 'Дата рождения' },
    { name: 'Почта' }
  ];
  employees = signal([]);

  private service = inject(EmployeesService);
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees(): void {
    this.service.getEmployees()
    .pipe(
      takeUntilDestroyed(this.destroyRef)
    )
    .subscribe((res) => {
      this.employees.set(res);
    })
  }
}
