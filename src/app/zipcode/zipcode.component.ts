import { Component, OnInit } from '@angular/core';
import { Zip } from 'models/zip';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-zipcode',
  templateUrl: './zipcode.component.html',
  styleUrls: ['./zipcode.component.css']
})
export class ZipcodeComponent implements OnInit {

  zip: Zip;
  cep: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  find() {
    this.http.get('http://viacep.com.br/ws/' + this.cep + '/json/')
      .subscribe((data: any) => {
          if (data.erro === true) {
            this.zip = null;
          } else {
            this.zip = data;
          }
        }, error => {
          console.log(error);
        });
  }

}
