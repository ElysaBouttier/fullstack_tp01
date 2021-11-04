import { Component } from '@angular/core';

@Component({
  selector: 'animeet-animals-list',
  templateUrl: './animals-list.component.html',
  styleUrls: ['./animals-list.component.scss']
})

export class AnimalsListComponent {
  
  ELEMENT_DATA = [
    {id: 1, name: 'Hydrogen', age: 5, gender: 'H'},
    {id: 1, name: 'Carbone', age: 1, gender: 'F'},
    {id: 1, name: 'Helium', age: 5, gender: 'F'},
    {id: 1, name: 'Fer', age: 12, gender: 'H'},
    {id: 1, name: 'Neon', age: 5, gender: 'H'},
  ];

  displayedColumns: string[] = ['id', 'name', 'age', 'gender'];
  dataSource = [...this.ELEMENT_DATA];

}
