import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ReceptiComponent } from './recepti/recepti.component';
import { ListaRecepataComponent } from './recepti/lista-recepata/lista-recepata.component';
import { DetailReceptaComponent } from './recepti/detail-recepta/detail-recepta.component';
import { ItemReceptaComponent } from './recepti/lista-recepata/item-recepta/item-recepta.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import {DropdownDirective} from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import {AppRoutingModule} from './app-routing.module';
import { ReceptStartComponent } from './recepti/recept-start/recept-start.component';
import { ReceptEditComponent } from './recepti/recept-edit/recept-edit.component';
import { ReceptService } from './recepti/recept.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReceptiComponent,
    ListaRecepataComponent,
    DetailReceptaComponent,
    ItemReceptaComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    ReceptStartComponent,
    ReceptEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
    
  ],
  providers: [ShoppingListService, ReceptService],
  bootstrap: [AppComponent]
})
export class AppModule { }
