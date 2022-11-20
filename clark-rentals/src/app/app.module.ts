import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { VehicleComponent } from './vehicle/vehicle.component';
import { ContactComponent } from './contact/contact.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

const appRoutes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'vehicles', component: VehicleComponent },
  {path: 'contact', component: ContactComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    CarouselComponent,
    FooterComponent,
    VehicleComponent,
    ContactComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
