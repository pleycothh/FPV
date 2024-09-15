import {Injectable } from '@angular/core';
import { BaseHttp } from '../sharing/services/base-http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlashService extends BaseHttp   {

  constructor(http: HttpClient) {
    super(http);
  }

  getUserByIdAysnc(id: string) {
   //return this.http.get<UserEntity>(`${this.apiUrl}/user/${id}`);
   return null;
  }

  getBookById() {
    return this.http.get<object>(`${this.apiUrl}/book`);
   return null;
  }


}