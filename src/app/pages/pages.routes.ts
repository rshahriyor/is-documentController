import { Routes } from '@angular/router';
import { Employees } from './employees/employees';
import { Inbox } from './inbox/inbox';

export default [
    {
        path: '',
        redirectTo: 'employees',
        pathMatch: 'full'
    },
    {
        path: 'employees',
        component: Employees
    },
    {
        path: 'inbox',
        loadChildren: () => import('./inbox/inbox.routes').then(r => r.default)
    },
    {
        path: 'pedagogical',
        loadComponent: () => import('./pedagogical/pedagogical').then(c => c.Pedagogical)
    },
    {
        path: 'educational',
        loadComponent: () => import('./educational/educational').then(c => c.Educational)
    }
] as Routes;
