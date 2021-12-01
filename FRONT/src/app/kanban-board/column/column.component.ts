import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Card } from 'src/app/model/card.model';
import { APIService } from 'src/app/service/api.service';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css'],
})
export class ColumnComponent implements OnInit {
  @Input() column!: string;
  @Input() cards!: Card[];

  constructor(private api: APIService) {
  }

  ngOnInit(): void {
  }

  onCardChanged(c: Card) {
    this.cards.forEach((card) => {
      if (card.id === c.id) {

        card.conteudo = c.conteudo;
        card.titulo = c.titulo;
        card.lista = c.lista;
      }
    })
    
  }

  createNewCard() {
    this.cards.push({ titulo: '', conteudo: '', lista: this.column, id: '' });
  }

  drop(event: CdkDragDrop<Card[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }

    const card = event.item.data;
    card.lista = this.column;

    this.api
      .changeCardById(
        card.id,
        card.titulo,
        card.conteudo,
        card.lista
      )
      .subscribe((card) => {
        this.api.cardsChanged.next(card);
      });
 }
}