import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { UserComponent } from './components/user/user.component';
import { AuthGuard } from './services/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductUpdateComponent } from './reusableComponents/product-update/product-update.component';
import { CanDeactivateGuardService } from './services/candeactivate-guard.service';
import { CreateProductComponent } from './components/create-product/create-product.component';

export const routes: Routes = [
  {
    path:'',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent

  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'products',
        component: ProductsComponent,
      },
      {
        path: 'editProduct/:id',
        component: ProductUpdateComponent,
        canDeactivate: [CanDeactivateGuardService]
      },
      {
        path: 'profile',
        component: UserComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'categories',
        component: CategoriesComponent,
        
      },
      {
        path: 'add-product',
        component: CreateProductComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard, CanDeactivateGuardService]
})
export class AppRoutingModule { 

}
