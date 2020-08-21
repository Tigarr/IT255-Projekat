import { Component, OnInit, Input } from '@angular/core';
import { Recept } from '../../recept.model';

@Component({
  selector: 'app-item-recepta',
  templateUrl: './item-recepta.component.html',
  styleUrls: ['./item-recepta.component.css']
})
export class ItemReceptaComponent implements OnInit {
  @Input() recept: Recept;
  @Input() index: number;

  ngOnInit(): void {
  }

}
