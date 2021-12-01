import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { KanbanBoardComponent } from './kanban-board/kanban-board.component';
import { ColumnComponent } from './kanban-board/column/column.component';
import { CardComponent } from './kanban-board/card/card.component';

import { APIService } from './service/api.service';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    KanbanBoardComponent,
    ColumnComponent,
    CardComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    DragDropModule
  ],
  providers: [APIService],
  bootstrap: [AppComponent],
})
export class AppModule {}
