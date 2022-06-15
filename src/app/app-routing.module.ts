import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbookComponent } from './addbook/addbook.component';
import { HomeComponent } from './home/home.component';
import { LivresComponent } from './livres/livres.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'livres', component: LivresComponent},
  { path: 'addbook', component: AddbookComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
