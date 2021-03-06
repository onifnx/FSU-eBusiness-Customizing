import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  declarations: [ProductListComponent, ProductComponent, ProductDetailComponent],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
