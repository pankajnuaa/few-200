import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooklistComponent } from './booklist.component';
import { AddbookComponent } from './components/addbook/addbook.component';
import { ListbooksComponent } from './components/listbooks/listbooks.component';
import { StoreModule } from '@ngrx/store';
import { FEATURE_NAME_BOOKS, reducer } from './reducer/booklist.reducer';


@NgModule({
  declarations: [BooklistComponent, AddbookComponent, ListbooksComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(FEATURE_NAME_BOOKS, reducer)
  ]
})
export class BooklistModule { }
