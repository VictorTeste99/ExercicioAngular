import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Imagem } from '../models/placeholder.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  constructor(private http : HttpClient) { }
  public getFotos() : Observable<any>{
      return this.http.get('https://jsonplaceholder.typicode.com/photos');
  }
}
