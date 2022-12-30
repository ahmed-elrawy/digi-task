import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { LayoutComponent } from 'src/app/@shared/components/layout/layout.component';
import { NotFoundComponent } from 'src/app/@shared/components/not-found/not-found.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';


let children: Routes;
children = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  },
  {
    path: 'products',
    component: ProductListComponent,
    data: { tab: 1 }
  },

  {
    path: 'add-product',
    component: AddProductComponent,
    data: { tab: 2 }
  },

  {
    path: 'product-details/:id',
    component: ProductDetailsComponent,
    data: { tab: 2 }
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
export class ProductRoutingModule {
}
