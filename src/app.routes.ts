import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/components/layout/app.layout';
import { Notfound } from './app/pages/notfound/notfound';
import { Employees } from '@/pages/employees/employees';

export const appRoutes: Routes = [
    {
        path: '',
        component: AppLayout,
        children: [
            { 
                path: '',
                loadChildren: () => import('./app/pages/pages.routes').then(m => m.default)
            }
        ]
    },
    {
        path: 'notfound', 
        component: Notfound 
    },
    { 
        path: 'auth', 
        loadComponent: () => import('./app/pages/auth/login').then(c => c.Login)
    },
    { 
        path: '**', 
        redirectTo: '/notfound' 
    }
];
