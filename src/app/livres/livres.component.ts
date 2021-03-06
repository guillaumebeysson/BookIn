import { Component, OnInit } from '@angular/core';
import { LivresService } from '../livres.service';

@Component({
  selector: 'app-livres',
  templateUrl: './livres.component.html',
  styleUrls: ['./livres.component.css']
})
export class LivresComponent implements OnInit {

  livres:any
  successUpdate: boolean = false;
  produitAmodifier = {
    titre: '',
    auteur: '',
    genre: '',
    prix: '',
    image: '',
  };

  constructor( private livresService : LivresService) { }

  ngOnInit(): void {
    this.AllLivres();
  }

  AllLivres() {
    this.livresService.getlivres().subscribe((data) => {
      this.livres = data;
      console.log("livres ++++" + this.livres)
    });
  }

  deleteLivre(id: any) {
    this.livresService.deletelivre(id).subscribe(() => {
      console.log('le produit : ' + id + 'a bien été supprimé');
      // confirm("êtes-vous sûr de vouloir supprimer" + this.produits.title)
      this.AllLivres();
    });
  }

  editLivre(l: any) {
    this.produitAmodifier = l;
  }

  savemodification() {
    this.livresService.update(this.produitAmodifier).subscribe(() => {
      this.successUpdate = true;
      this.AllLivres();
    });
  }
}
