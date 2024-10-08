import {Component, Injectable } from '@angular/core';
import { BaseHttp } from '../sharing/services/base-http';
import { HttpClient } from '@angular/common/http';
import { ProductEntity } from '../sharing/models/productEntity.model';
import { RequestEntity } from '../sharing/models/request.model';

@Injectable({
  providedIn: 'root'
})

export class FlashService extends BaseHttp   {

  constructor(http: HttpClient) {
    super(http);
  }

  calc(product: RequestEntity) {
    return this.http.post<ProductEntity>(`${this.apiUrl}/Product/calc`, product);
  }
}