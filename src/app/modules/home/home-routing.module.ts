import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { LayoutComponent } from 'src/app/@shared/components/layout/layout.component';
import { NotFoundComponent } from 'src/app/@shared/components/not-found/not-found.component';
import { HomeComponent } from './home.component';


let children: Routes;
children = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
 
    data: { tab: 1 }
  },

  {
    path: '**',
    component: NotFoundComponent,
  }
];
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
