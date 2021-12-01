import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KanbanBoardComponent } from 'src/app/kanban-board/kanban-board.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './service/aut-guard.service';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'kanban-board', canActivate: [AuthGuardService], component: KanbanBoardComponent },
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
