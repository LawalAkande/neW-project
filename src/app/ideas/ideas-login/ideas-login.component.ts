import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ideas-login',
  templateUrl: './ideas-login.component.html',
  styleUrls: ['./ideas-login.component.css']
})
export class IdeasLoginComponent implements OnInit {
  currentDate = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
