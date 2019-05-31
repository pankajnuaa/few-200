import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ToDoListComponent } from './components/todo-list/todo-list.components';
import { TipCalculatorComponent } from './components/tip-calculator/tip-calculator.component';
import { CounterComponent } from './components/counter/counter.component';
import { ShoppingComponent } from './features/shopping/shopping.component';

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
    path: 'counter',
    component: CounterComponent
  }, {
    path: 'shopping',
    component: ShoppingComponent
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
