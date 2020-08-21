import { Recept } from './recept.model';
import {  Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';




@Injectable()
export class ReceptService {
    receptiPromena = new Subject<Recept[]>();

    
    recepti: Recept[] = [
        new Recept(
            'Domaci burger', 
            'Burgeri su sigurno jedno od najomiljenijih jela. To je zaista sa razlogom, zar ne?', 
            'https://grillpub.rs/wp-content/uploads/burgeri-restoran-grill-pub-novi-beograd-3.jpg',
            [
                new Ingredient('Junetina', 2),
                new Ingredient('Jaje', 1),
                new Ingredient('Kecap', 1),
                new Ingredient('Senf', 2),
                new Ingredient('Majonez', 1),
                new Ingredient('Zemicke', 1)
            ]),
        new Recept(
            'Domaci giros', 
            'Da li je uopste moguce da neko nije probao i zauvek zavoleo domaci giros?', 
            'https://www.glas-zajecara.com/wp-content/uploads/2018/06/giros2.jpg',
            [
                new Ingredient('Pileci batak', 2),
                new Ingredient('Pomfrit', 1),
                new Ingredient('Paradajz', 1),
                new Ingredient('Crni luk', 1),
                new Ingredient('Pavlaka', 1)
            ])
      ];

      constructor(private shoppingListService: ShoppingListService){}

    getRecepte(){
        return this.recepti.slice();
    }  

    getRecept(id: number){
        return this.recepti.slice()[id];
    }

    dodavanjeSastojakaUShoppingListu(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }

    dodajRecept(recept: Recept){
        this.recepti.push(recept);
        this.receptiPromena.next(this.recepti.slice());
    }

    updateRecept(index: number, noviRecept: Recept){
        this.recepti[index] = noviRecept;
        this.receptiPromena.next(this.recepti.slice());
    }

    obrisiReceptMetod(index: number){
        this.recepti.splice(index, 1);
        this.receptiPromena.next(this.recepti.slice());   
     }

}