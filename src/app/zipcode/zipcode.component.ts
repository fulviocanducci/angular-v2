import { Component, OnInit } from '@angular/core';
import { Zip } from 'models/zip';
import { AppService } from '../app.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-zipcode',
  templateUrl: './zipcode.component.html',
  styleUrls: ['./zipcode.component.css']
})
export class ZipcodeComponent implements OnInit {

  zip: Zip;
  cep: string;

  constructor(private service: AppService) { }

  ngOnInit() {
  }

  find(): void {
    this.zip = null;
    this.service
      .getZip(this.cep)
        .subscribe((data: Zip) => {
          if (data.hasOwnProperty('erro')) {
            this.message();
          } else {
            this.zip = data;
          }
        }, error => {
          this.message();
        });
  }

  private message(): void {
    swal('Erro', 'Cep inválido');
  }

}
