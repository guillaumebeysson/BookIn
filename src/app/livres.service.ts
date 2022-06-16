import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LivresService {
url = "https://book-in.herokuapp.com"
  constructor(private http : HttpClient) { }

  getlivres(){
    return this.http.get(`${this.url}/livres`);
  }
  deletelivre(id: any){
    return this.http.delete(`${this.url}/livres/${id}`);
  }
  saveLivre(livre:any){
    return this.http.post(`${this.url}/livres/`, livre)
  }
  update(livre:any,){
    return this.http.patch(`${this.url}/livres/` + livre._id , livre)
  }
  
}
