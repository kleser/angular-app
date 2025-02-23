import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-task-eight',
    templateUrl: './task-eight.component.html',
    styleUrls: ['./task-eight.component.css']
})
export class TaskEightComponent {

    secondDone: boolean = false;
    inputNumber: number = 0;


    constructor(private router: Router) {
    }

    changeSecond() {
        if (this.inputNumber == 132) {
            this.router.navigate(['tasks/nine']);
        }
    }

}
