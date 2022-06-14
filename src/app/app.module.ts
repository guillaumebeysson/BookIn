import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LivresService } from './livres.service';
import { LivresComponent } from './livres/livres.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LivresComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [LivresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
