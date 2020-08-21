import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { ReceptService } from '../recept.service';
import { Recept } from '../recept.model';

@Component({
  selector: 'app-recept-edit',
  templateUrl: './recept-edit.component.html',
  styleUrls: ['./recept-edit.component.css']
})
export class ReceptEditComponent implements OnInit {
  id: number;
  editMod = false;
  receptForma: FormGroup;

  constructor(private ruta: ActivatedRoute,
              private receptService: ReceptService,
              private ruter: Router) { }

  ngOnInit() {
    this.ruta.params
      .subscribe(
        (parametar: Params) => {
          this.id = +parametar['id'];
          this.editMod = parametar['id'] != null;
          console.log(this.editMod);
          this.initForma();
        }
      );
  }

  onSubmit(){
  
    if(this.editMod) {
      this.receptService.updateRecept(this.id, this.receptForma.value);
    }else{
      this.receptService.dodajRecept(this.receptForma.value);
    }
    this.cancel();
  }

  dodajSastojak(){
    (<FormArray>this.receptForma.get('ingredients')).push(
      new FormGroup({
        'ime': new FormControl(null, Validators.required),
        'kolicina': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
      ])
      })
    );
  }

  obrisiSastojak(index: number){
    (<FormArray>this.receptForma.get('ingredients')).removeAt(index);
  }

  cancel(){
    this.ruter.navigate(['../'], {relativeTo: this.ruta});
  }

  initForma(){
    let receptIme = '';
    let receptImagePath = '';
    let receptOpis = '';
    let receptIngredients = new FormArray([]);
  

    if(this.editMod){
      const recept = this.receptService.getRecept(this.id);
      receptIme = recept.name;
      receptImagePath = recept.imagePath;
      receptOpis = recept.description;
      if (recept['ingredients']) {
        for(let ingredient of recept.ingredients){
          receptIngredients.push(
            new FormGroup({
              'ime': new FormControl(ingredient.name, Validators.required),
              'kolicina': new FormControl(ingredient.amount, [
                  Validators.required,
                  Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          );
        }
      }
    }

    this.receptForma = new FormGroup({
      'ime': new FormControl(receptIme, Validators.required),
      'imagePath': new FormControl(receptImagePath, Validators.required),
      'opis': new FormControl(receptOpis, Validators.required),
      'ingredients': receptIngredients
    });
  }

  get controls() { 
    return (<FormArray>this.receptForma.get('ingredients')).controls;
  }

}
