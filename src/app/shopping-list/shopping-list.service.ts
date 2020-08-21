
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
    promenaIngredients = new Subject<Ingredient []>();
    editovanje = new Subject<number>();
    ingredients: Ingredient[] =[
        new Ingredient('Breskve', 4),
        new Ingredient('Pomorandze', 10)
      ];

    getIngredient(){
        return this.ingredients;
    }

    getSastojak(index: number){
        return this.ingredients[index];
    }
    
    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
    }

    addIngredients(ingredients: Ingredient[]){
        
        this.ingredients.push(...ingredients);
        this.promenaIngredients.next(this.ingredients.slice());
    }

    updateIngredient(index: number, noviIngredient: Ingredient){
        this.ingredients[index] = noviIngredient;
        this.promenaIngredients.next(this.ingredients.slice());
    }

    obrisiIngredient(index: number){
        this.ingredients.splice(index,1);
        this.promenaIngredients.next(this.ingredients.slice());
    }
}