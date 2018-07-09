import { Component, OnInit } from '@angular/core';
import { Zip } from 'models/zip';
import { AppService } from '../app.service';

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
    this.service
      .getZip(this.cep)
      .subscribe((data: Zip) => {
        this.zip = data;
      });
  }

}
