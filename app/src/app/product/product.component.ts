import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../api/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  public productlist:any;
item: any;
  constructor(private api:ProductsService){}
  
  
  ngOnInit(): void {
    this.api.getproduct().subscribe(res=>{
    //console.log(res);
    this.productlist=res;
    })
    console.log(this.productlist);
    
  }



}
