import { Routes } from '@angular/router';
import { Employees } from './employees/employees';
import { Inbox } from './mail/inbox/inbox';

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
        loadChildren: () => import('./mail/inbox/inbox.routes').then(r => r.default)
    },
    {
        path: 'sent',
        loadComponent: () => import('./mail/sent/sent').then(c => c.Sent)
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
