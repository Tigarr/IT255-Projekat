import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ReceptiComponent} from './recepti/recepti.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import { ReceptStartComponent } from './recepti/recept-start/recept-start.component';
import { DetailReceptaComponent } from './recepti/detail-recepta/detail-recepta.component';
import { ReceptEditComponent } from './recepti/recept-edit/recept-edit.component';

const appRute: Routes = [
    { path: '', redirectTo: '/recepti', pathMatch: 'full' },
    {path: 'recepti', component: ReceptiComponent, children: [
        {path: '', component: ReceptStartComponent },
        {path: 'new', component: ReceptEditComponent},
        {path: ':id', component: DetailReceptaComponent },
        {path: ':id/edit', component: ReceptEditComponent}
    ]},
    {path: 'shopping-list', component: ShoppingListComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(appRute)],
    exports: [RouterModule]
})
export class AppRoutingModule {
 
}