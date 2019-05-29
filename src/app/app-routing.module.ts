import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ToDoListComponent } from './components/todo-list/todo-list.components';
import { TipCalculatorComponent } from './components/tip-calculator/tip-calculator.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'todo-list',
    component: ToDoListComponent
  },
  {
    path: 'tip-calculator',
    component: TipCalculatorComponent
  }, {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
