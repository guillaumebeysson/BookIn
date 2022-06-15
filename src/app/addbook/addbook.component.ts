import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LivresService } from '../livres.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  constructor(private livreservice : LivresService, private router : Router) { }

  ngOnInit(): void {
  }

  saveLivre(livre:any){
    let data = livre.value
    this.livreservice.saveLivre(data).subscribe(data=>{
      console.log("les données sont enregistrées")
      this.router.navigate(['/livres'])
    })
  }

}
