import { Component, OnInit } from '@angular/core';
import { Recept } from '../recept.model';
import { ReceptService } from '../recept.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-detail-recepta',
  templateUrl: './detail-recepta.component.html',
  styleUrls: ['./detail-recepta.component.css']
})
export class DetailReceptaComponent implements OnInit {
  recept: Recept;
  id: number;

  constructor(private receptService: ReceptService,
              private ruta: ActivatedRoute,
              private ruter: Router) { }

  ngOnInit(): void {
    this.ruta.params
      .subscribe(
        (params: Params) => {
            this.id = params['id'];
            this.recept = this.receptService.getRecept(this.id)
        }
      )
  }

  dodavanjeUShoppingListu(){
    this.receptService.dodavanjeSastojakaUShoppingListu(this.recept.ingredients);
  }

  editRecept(){
    this.ruter.navigate(['edit'], {relativeTo: this.ruta});
  }

  obrisiRecept(){
    this.receptService.obrisiReceptMetod(this.id);
    this.ruter.navigate(['/recepti']);
  }
}
