import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
  serverVisibility = true;

  constructor() { }

  toggleP() {
    if (this.serverVisibility) {
      this.serverVisibility = false;
    } else {
      this.serverVisibility = true;
    }
  }

  ngOnInit(): void {
  }

}
