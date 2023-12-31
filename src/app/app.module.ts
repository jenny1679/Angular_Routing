import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Routing Module
import { AppRoutingModule } from './app-routing.module';

//Module
//import { FeatureModule } from './feature/feature.module';

//Component
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    //FeatureModule, //要插入module需放在這裡(AppRoutingModule前)
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
