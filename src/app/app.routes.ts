import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { ErrorPage } from './pages/error/error.page';

export const routes: Routes = [
    {
        path: '',
        component: HomePage
    },
    {
        path: '**',
        component: ErrorPage
    }
];
