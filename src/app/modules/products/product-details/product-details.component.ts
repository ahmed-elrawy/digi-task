import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Product } from 'src/app/@core/data/products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product?: Product

  constructor(private productService:ProductsService,private route: ActivatedRoute   ) { }

  ngOnInit(): void {
    this.route.params.subscribe(prm => {
      this.productService.productDetails(prm['id']).subscribe(res => {
        this.product= res
        console.log(res);
        
      })
    })
  }
}
