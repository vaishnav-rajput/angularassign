import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { LoginComponent } from './components/login/login.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe, CommonModule, DatePipe } from '@angular/common';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './components/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductCardComponent } from './reusableComponents/product-card/product-card.component';
import { NextPageComponent } from './reusableComponents/next-page/next-page.component';
import { PrevPageComponent } from './reusableComponents/prev-page/prev-page.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    LoginComponent,
    LayoutComponent,
    UserComponent,
    HomeComponent,
    CategoriesComponent,
    ProductCardComponent,
    NextPageComponent,
    PrevPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    DatePipe,
    AsyncPipe,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
