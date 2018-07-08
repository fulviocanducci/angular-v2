import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';
  ngOnInit() {
    $('.navbar-nav li a').click(function () {
      if (!$(this).parent().hasClass('dropdown')) {
        ($('.navbar-collapse') as any).collapse('hide');
      }
    });
  }
}
