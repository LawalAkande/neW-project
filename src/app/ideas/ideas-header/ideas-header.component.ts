import { Component, OnInit } from '@angular/core';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ideas-header',
  templateUrl: './ideas-header.component.html',
  styleUrls: ['./ideas-header.component.css']
})
export class IdeasHeaderComponent implements OnInit {
  userName = 'Lawal';

  constructor(private router: Router) { }
  // setPage(title: string) {
  //   this.
  // }
  ngOnInit(): void {
  }

}
