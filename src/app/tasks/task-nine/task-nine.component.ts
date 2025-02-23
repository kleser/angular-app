import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-task-nine',
    templateUrl: './task-nine.component.html',
    styleUrls: ['./task-nine.component.css']
})
export class TaskNineComponent {

    thirdDone: boolean = false;
    inputYear: number = 0;
    inputName: string = '';
    isYearCorrectBoolean: boolean = false;
    isNameCorrectBoolean: boolean = false;

    constructor(private router: Router) {
    }

    updateYear() {
        this.isYearCorrectBoolean = this.inputYear == 1705;
    }

    updateName() {
        this.isNameCorrectBoolean = this.inputName.toLowerCase().replace(/ /g, '') == 'samuelfrisching';
    }

    changeThird() {
        if (this.inputYear == 1705 && this.inputName.toLowerCase().replace(/ /g, '') == 'samuelfrisching') {
            this.thirdDone = true;
        }
    }

    finish() {
        this.router.navigate(['tasks/ten']);
    }

}
