
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MovieStackComponent } from './movie-stack.component';
import { DemoMaterialModule } from '../material.module';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { LazyLoadImageModule,scrollPreset} from 'ng-lazyload-image';
import { FlexLayoutModule } from '@angular/flex-layout';
const appRoutes: Routes = [
  {
    path: 'movies',
    component: MovieListComponent
  },
  {
    path: 'movies/:sid',
    component: MovieDetailsComponent,
  }
];

@NgModule({
  declarations: [
    MovieStackComponent,
    MovieListComponent,
    MovieDetailsComponent,
  ],
  imports: [
    RouterModule.forChild(appRoutes),
    HttpClientModule,
    DemoMaterialModule,
    CommonModule,
    InfiniteScrollModule,
    LazyLoadImageModule.forRoot({
        preset: scrollPreset // <-- tell LazyLoadImage that you want to use scrollPreset
    }),
    FlexLayoutModule

  ],
  providers: [],
  bootstrap: []
})
export class MovieListModule { }
