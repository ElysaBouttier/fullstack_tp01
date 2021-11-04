import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AnimalsComponent } from './animals/animals.component';
import { AnimalsListComponent } from './animals/animals-list/animals-list.component';
import { AnimalsDetailsComponent } from './animals/animals-details/animals-details.component';

const routes = [
  {
    path: 'animals',
    component: AnimalsDetailsComponent,
  },
  {
    path: 'animals-list',
    component: AnimalsListComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
