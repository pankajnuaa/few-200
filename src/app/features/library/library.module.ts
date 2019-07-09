import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryComponent } from './library.component';
import { ListComponent } from './list/list.component';
import { StoreModule } from '@ngrx/store';
import { FEATURE_NAME, reducer } from './reducer/library.index';
import { EntryComponent } from './entry/entry.component';

@NgModule({
  declarations: [LibraryComponent, ListComponent, EntryComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(FEATURE_NAME, reducer)
  ]
})
export class LibraryModule { }
