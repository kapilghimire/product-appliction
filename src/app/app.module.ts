import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent} from './pages/home/home.component'
import { HeaderComponent} from './pages/header/header.component'
import { FooterComponent} from './pages/footer/footer.component'
import { ReactiveFormsModule } from '@angular/forms';
import { PagesModule } from './pages/pages.module';
import { ProductsComponent } from './pages/products/products.component';


// import all necessary modules
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
