import { Component, OnInit } from '@angular/core';
import { COLUMNS } from 'src/app/model/columns';
import { APIService } from 'src/app/service/api.service';
import { Router } from '@angular/router';
import { Card } from 'src/app/model/card.model';


@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.css'],
})
export class KanbanBoardComponent implements OnInit {
  columns = COLUMNS;
  logedIn!: boolean;

  cards!: Card[];
  constructor(private api: APIService, private router: Router) {}

  ngOnInit(): void {
     this.getAllCardsFromAPI();

     this.api.cardsChanged.subscribe((card) => {
       this.getAllCardsFromAPI();
     });
  }

  getAllCardsFromAPI() {
    this.api.getAllCards().subscribe((cards) => {
      if (!cards) {
        return;
      } else {
        this.cards = cards;
      }
    });
  }
}
