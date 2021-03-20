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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/authinterceptor';
import { TokenService } from './services/token.service';
import { Router } from '@angular/router';
import { AccountComponent } from './pages/account/account.component';


// import all necessary modules
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    AccountComponent
    
  ],
  imports: [
    BrowserModule,
     // import HttpClientModule after BrowserModule.
     HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    PagesModule
  ],
  providers: [ 
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
      deps: [TokenService,Router]
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
