import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductRoutingModule } from '../product-routing.module';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  addProduct!:FormGroup
  constructor(private productService:ProductsService) { }

  ngOnInit(): void {
    this.addProduct = new FormGroup({
      title: new FormControl('1',Validators.required),
      price: new FormControl('',Validators.required),
      img: new FormControl('',Validators.required),
      description: new FormControl('',Validators.required),
      category: new FormControl('',Validators.required)
    });
  }

  submit() {
    console.log(this.addProduct.value);

    this.productService.addproduct(this.addProduct.value).subscribe(res => {
      console.log(res);
      
    })
    

  }

}
