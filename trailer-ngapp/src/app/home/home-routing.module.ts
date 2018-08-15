import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from '@app/core';

import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { TrailerComponent } from './trailer/trailer.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'index',
        pathMatch: 'full'
      },
      {
        path: 'index',
        component: IndexComponent,
        data: { title: 'app.examples.menu.stocks' }
      },
      {
        path: 'trailer/:id',
        component: TrailerComponent,
        data: { title: 'app.examples.menu.stocks' }
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
