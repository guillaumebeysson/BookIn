import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LivresComponent } from './livres/livres.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LivresComponent, HttpClient]
})
export class AppComponent {
  title = 'crudWithExpress';
}
