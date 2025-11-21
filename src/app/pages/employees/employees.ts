import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { PageTitle } from "@/shared/components/page-title/page-title";

@Component({
  selector: 'app-employees',
  imports: [TableModule, CommonModule, CardModule, PageTitle],
  templateUrl: './employees.html',
  styleUrl: './employees.scss'
})
export class Employees {
  cols: any[] = [
    { name: 'Имя' },
    { name: 'Фамилия' },
    { name: 'Возраст' },
    { name: 'Должность' }

  ];
  products: any[] = [
    {
      name: 'Шахриёр',
      lastName: 'Рахматов',
      age: '18',
      role: 'Учитель'
    },
    {
      name: 'Абдушариф',
      lastName: 'Сатторов',
      age: '18',
      role: 'Учитель'
    }
  ];
}
