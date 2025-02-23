import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-task-three',
  templateUrl: './task-three.component.html',
  styleUrls: ['./task-three.component.css']
})
export class TaskThreeComponent implements OnInit {

  isChecked = true;
  paceOne: string = '5:23';
  paceTwo: string = '5:28';
  paceCorrect: boolean = false;
  kmOne: number = 6.83;
  kmTwo: number = 6.52;
  kmCorrect: boolean = false;

  falseTry: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  checkPace(event: any) {
    let input: string = event.target.value;
    if (input == this.paceOne || input == this.paceTwo) {
      this.paceCorrect = true;
    }
  }

  checkKm(event: any) {
    let input: number = event.target.value;
    if (input == this.kmOne || input == this.kmTwo) {
      this.kmCorrect = true;
    }
  }

  control() {
    if (this.kmCorrect && this.paceCorrect && !this.isChecked) {
      this.router.navigate(['tasks/four']);
    } else {
      this.falseTry = true;
    }
  }

}
