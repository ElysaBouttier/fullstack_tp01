import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import {map} from 'rxjs/operators';


@Injectable()
export class AppService {
  constructor(private httpService: HttpService){}
  pets = [
    {
      id: 1,
      name: 'nom',
      age: 5,
      gender: "Male",
    },
  ];

  create(pets) {
    this.pets.push(pets);
    return 'This action adds a new pet';
  }

  findAll(): Observable<AxiosResponse<any>> {
    const response = this.httpService.get('https://meetapet-api.herokuapp.com/api/pets')
    .pipe(
      map(response => response.data)
    );    
    return response;
  }

  findOne(id: number) {
    return this.pets.find((pet) => pet.id === id);
  }

  update(id: number) {
    return `This action updates a #${id} pet`;
  }

  remove(id: number) {
    return `This action removes a #${id} pet`;
  }
}
