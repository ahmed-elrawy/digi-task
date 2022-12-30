import {NgModule} from '@angular/core';
import { SharedModule } from 'src/app/@shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    AddProductComponent
  ],
  imports: [
    ProductRoutingModule,
    NgbDatepickerModule,
    SharedModule,
    ]
})
export class ProductModule {
}
