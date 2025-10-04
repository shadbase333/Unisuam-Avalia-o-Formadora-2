import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.page').then(m => m.HomePage)
  },
  {
    path: 'identificacao',
    loadComponent: () => import('./identificacao/identificacao.page').then(m => m.IdentificacaoPage)
  },
  {
    path: 'dogs',
    loadComponent: () => import('./dogs/dogs.page').then(m => m.DogsPage)
  }
];