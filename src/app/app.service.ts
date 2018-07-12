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

  getAddress(uf: string, city: string, address: string) {
    return this.http.get('http://viacep.com.br/ws/' + uf + '/' + city + '/' + address + '/json/ ');
  }

  getUf() {
    return this.http.get('./assets/uf.json');
  }
}
