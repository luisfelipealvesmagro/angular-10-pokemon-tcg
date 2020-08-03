import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainLayoutComponent } from './core/layouts/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent,
    children: [
      { path: '', loadChildren: () => import('./pages/card-list/card-list.module').then(m => m.CardListModule) },
      { path: 'card/:id', loadChildren: () => import('./pages/card-detail/card-detail.module').then(m => m.CardDetailModule) },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
