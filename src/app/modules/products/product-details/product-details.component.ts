import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { map } from 'rxjs';
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
    this.route.data.pipe( //featch tha data by Resolver 
    map((data) => {
      
     return data
     })
    ).subscribe(res =>{
    this.product = res['resolve']     
  })

  }
}
