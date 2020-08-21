import { Component, OnInit, OnDestroy } from '@angular/core';

import { Recept } from '../recept.model';
import { ReceptService } from '../recept.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lista-recepata',
  templateUrl: './lista-recepata.component.html',
  styleUrls: ['./lista-recepata.component.css']
})
export class ListaRecepataComponent implements OnInit, OnDestroy {
 
  recepti: Recept[];
  subscription: Subscription;

  constructor(private receptService: ReceptService,
              private ruter: Router,
              private ruta: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.receptService.receptiPromena
      .subscribe(
        (recepti: Recept[]) => {
          this.recepti = recepti;
        }
      );
    this.recepti = this.receptService.getRecepte();
  }

  noviRecept(){
    
    this.ruter.navigate(['new'], {relativeTo: this.ruta});
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}


