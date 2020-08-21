import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';



@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') shoppingListForma: NgForm;
  subscription: Subscription;
  editMod = false;
  editItemIndex: number;
  editItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }


  ngOnInit() {
    this.subscription = this.shoppingListService.editovanje
      .subscribe(
        (index: number) => {
          this.editItemIndex = index;
            this.editMod=true;
            this.editItem = this.shoppingListService.getSastojak(index);
            this.shoppingListForma.setValue({
              ime: this.editItem.name,
              kolicina: this.editItem.amount
            })
          }
      );
  }

  onSubmit(forma: NgForm){
    const vrednost = forma.value;
    const newIngredient = new Ingredient(vrednost.ime, vrednost.kolicina);
    if(this.editMod){
      this.shoppingListService.updateIngredient(this.editItemIndex, newIngredient);
    }else{
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.editMod = false;
    forma.reset();
  }

  clear(){
    this.shoppingListForma.reset();
    this.editMod = false;
  }

  obrisi(){
    this.shoppingListService.obrisiIngredient(this.editItemIndex);
    this.clear();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
