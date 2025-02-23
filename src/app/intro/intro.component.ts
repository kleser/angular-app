import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  wrongTry: boolean = false;
  wrongString: string = '';
  wrongAnswers: string[] = ['Nid ganz', 'Leider nid', 'Probiers nomau', 'Sträng di ah ;)'];
  pageForm = new FormGroup({
    password: new FormControl('', [Validators.required]),
  });

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  checkPassword() {
    let value = this.pageForm.value.password;
    value = value.replace(/\s/g, '');

    if (value == '030624' || value == '03.06.24' || value == '03062024' || value == '03.06.2024') {
      this.router.navigate(['tasks/one']);

    } else {
      this.wrongTry = true;
      this.selectRandomString();
    }
  }

  selectRandomString() {
    const randomIndex = Math.floor(Math.random() * this.wrongAnswers.length);
    this.wrongString = this.wrongAnswers[randomIndex];
  }

}
