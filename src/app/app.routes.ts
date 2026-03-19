import { Routes } from '@angular/router';

import { DocsLayout } from './layout/docs-layout';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home').then((m) => m.Home),
    },
    {
        path: 'docs',
        component: DocsLayout,
        children: [
            {
                path: '',
                loadComponent: () => import('./pages/docs/docs-index').then((m) => m.DocsIndex),
            },
            {
                path: 'button',
                loadComponent: () => import('./pages/docs/button/button-doc').then((m) => m.ButtonDoc),
            },
            {
                path: 'input',
                loadComponent: () => import('./pages/docs/input/input-doc').then((m) => m.InputDoc),
            },
        ],
    },
];
