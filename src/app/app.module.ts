import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SupplierManagementService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material.module';
import { RouterModule, Routes } from '@angular/router';
import { MovieListModule } from './movie-stack/movie-stack.module';
// import { MovieStackComponent } from './movie-stack/movie-stack.component';
// import { MovieDetailsComponent } from './movie-details/movie-details.component';



const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/movies',
    pathMatch: 'full'
  },
  {
    path: 'movies',
    loadChildren: './movie-stack/movie-stack.module#MovieListModule'
  },
  {
    path: '**',
    loadChildren: './movie-stack/movie-stack.module#MovieListModule'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    SlickCarouselModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    MovieListModule

  ],
  providers: [SupplierManagementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
