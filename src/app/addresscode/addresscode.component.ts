import { Component, OnInit } from '@angular/core';
import { Zip } from 'models/zip';
import { AppService } from '../app.service';

@Component({
  selector: 'app-addresscode',
  templateUrl: './addresscode.component.html',
  styleUrls: ['./addresscode.component.css']
})
export class AddresscodeComponent implements OnInit {

  listZip: Array<Zip>;
  uf: string;
  city: string;
  address: string;

  constructor(private service: AppService) { }

  ngOnInit() {
    this.listZip = new Array<Zip>();
  }

  find() {
    this.service.getAddress(this.uf, this.city, this.address)
      .subscribe((data: Array<Zip>) => {
        this.listZip = data;
      }, error => {
        console.log(error);
      });
  }

  disableBtn() {
    return (!this.uf ||
            !this.city ||
            !this.address ||
             this.uf === '' ||
             this.city === '' ||
             this.address === '');
  }

}
