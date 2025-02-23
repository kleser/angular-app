import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-task-six',
    templateUrl: './task-six.component.html',
    styleUrls: ['./task-six.component.css']
})
export class TaskSixComponent {

    wantToKnow: boolean = false;
    isCorrectBoolean: boolean = false;

    constructor(private router: Router) {
    }

    changeKnow() {
        this.wantToKnow = true;
    }

    isCorrect(inputEvent: any) {
        let inputText: string = inputEvent.target.value.toLowerCase();
        if (inputText == "hotel zollhaus" || inputText == "zollhaus") {
            this.isCorrectBoolean = true;
            this.router.navigate(['tasks/seven']);
        }
    }

}
