import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormGroup, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BikeDetailsComponent } from './bike-details/bike-details.component';
import { ListBikesComponent } from './list-bikes/list-bikes.component';
import { AddBikesComponent } from './add-bikes/add-bikes.component';
import { FilterProductPipe } from './Filter/filter-product.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { ShowBikeImagesDialogComponent } from './show-bike-images-dialog/show-bike-images-dialog.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PageNotFoundComponent,
    AboutComponent,
    GalleryComponent,
    BikeDetailsComponent,
    ListBikesComponent,
    AddBikesComponent,
    FilterProductPipe,
    ShowBikeImagesDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,RouterModule,
    ReactiveFormsModule,HttpClientModule,
    RouterModule.forRoot([
      {path:'login',component:LoginComponent},
      {path: '', redirectTo: '/login', pathMatch: 'full' },
      {path:'home',component:HomeComponent},
      {path:'about',component:AboutComponent},
      {path:'gallery',component:GalleryComponent},
      {path:'bike-details',component:BikeDetailsComponent},
      {path:'add-bikes',component:AddBikesComponent},
      {path:'list-bikes',component:ListBikesComponent},
      {path:'**',redirectTo:'/page-not-found'}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
