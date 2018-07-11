import { Component, OnInit, Input } from '@angular/core';
import { Zip } from 'models/zip';

@Component({
  selector: 'app-little-offers',
  templateUrl: './little-offers.component.html',
  styleUrls: ['./little-offers.component.css']
})
export class LittleOffersComponent implements OnInit {

  @Input() model: Zip;

  constructor() { }

  ngOnInit() {

  }

}
