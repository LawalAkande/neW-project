import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ideas-footer',
  templateUrl: './ideas-footer.component.html',
  styleUrls: ['./ideas-footer.component.css']
})
export class IdeasFooterComponent implements OnInit {
  currentDate = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
