import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{



  products$!: Observable<Product[]>;
  keyword: string = '';

  constructor(
   private productService: ProductService
    ) {}

    ngOnInit()  {
      this.getProducts();
}
getProducts(): void {

this.products$ = this.productService.getProducts();

//  this.productService.getProducts()
//   .subscribe({
//     next: data => {
//       this.products = data
//     },
//     error: err=> {
//       console.log("error backend:" + err)}
//     })

}

deleteProduct(product: Product){
  if(confirm("Are you sure"))
  this.productService.deleteProduct(product).subscribe({
    next: data => {
      this.getProducts();
      // this.products$ = this.products$.subscribe(data =>{
      //   data.filter(p => p.id != product.id)
      // });
  },
    error: err=> {

    }})
  }

  searchProduct() {
     this.products$ = this.productService.searchProduct(this.keyword);
    }



handleCheckProduct(product: Product) {
  this.productService.checkProduct(product).subscribe({
    next: updateProduct =>{
      product.checked = !product.checked;
    }
  });
}


}
