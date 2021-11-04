import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { AnimalsComponent } from './animals/animals.component';
import { AnimalsListComponent } from './animals/animals-list/animals-list.component';
import { AnimalsDetailsComponent } from './animals/animals-details/animals-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';


const routes: Routes = [
  {
    path: 'animals',
    component: AnimalsDetailsComponent,
  },
  {
    path: 'animals-list',
    component:  AnimalsListComponent,
  },
];
@NgModule({
  declarations: [
    AppComponent,
    AnimalsComponent,
    AnimalsListComponent,
    AnimalsDetailsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }),
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
