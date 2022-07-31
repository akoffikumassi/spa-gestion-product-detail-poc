import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/product-detail/541', pathMatch: 'full' },
  { path: 'product-detail/:id', component: ProductDetailComponent },
  { path: '**', redirectTo: '/product-detail/541' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
