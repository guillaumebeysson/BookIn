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
  saveLivre(livre:any){
    return this.http.post("http://localhost:8080/livres/", livre)
  }
  update(livre:any,){
    return this.http.patch("http://localhost:8080/livres/" + livre._id , livre)
  }
  
}
