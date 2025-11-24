import { Routes } from '@angular/router';
import { Inbox } from './inbox';

export default [
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: '',
        component: Inbox
    },
    {
        path: ':id',
        loadComponent: () => import('./inbox-detail/inbox-detail').then(c => c.InboxDetail)
    }
] as Routes;
