import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LivresService {

  constructor(private http : HttpClient) { }

  getlivres(){
    return this.http.get(`http://localhost:8080/livres`);
  }
  deletelivre(id: any){
    return this.http.delete(`http://localhost:8080/livres/${id}`);
  }
}