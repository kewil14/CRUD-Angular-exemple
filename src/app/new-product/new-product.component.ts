import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {

  public productForm!: FormGroup;

  // le formbuilder c'est pour la structure de notre formulaire
  constructor(
    private fb: FormBuilder,
    private productService: ProductService
  ){}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      name: this.fb.control('', [Validators.required]),
      price: this.fb.control(0, [Validators.required]),
      checked: this.fb.control(false, [Validators.required]),
    })
  }

  saveProduct() {
    let product: Product = this.productForm.value;
    this.productService.saveProduct(product).subscribe({
      next: (data) => {
        alert(JSON.stringify(data))
      },
      error: (err) => {
        console.log(err)
      }
    });
    }
}
