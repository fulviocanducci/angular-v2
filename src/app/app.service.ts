import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getZip(cep: string) {
    return this.http.get('http://viacep.com.br/ws/' + cep + '/json/');
  }
}
