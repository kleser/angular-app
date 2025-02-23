import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-task-one',
    templateUrl: './task-one.component.html',
    styleUrls: ['./task-one.component.css']
})
export class TaskOneComponent {

    allCorrect: boolean = false;

    correctArray: boolean[] = [false, false, false, false, false, false, false, false];

    constructor(private router: Router) {
    }

    solutions: string[] = ['Waadt', 'Athletics Night', 'Nina', 'Kleisa', 'Duo', 'Olympia Museum', 'Rosegarte', 'Findus'];

    isCorrect(inputEvent: any, index: number) {
        let inputText: string = inputEvent.target.value.toLowerCase().replace(/ /g, '');
        if (inputText == '') {
            return;
        }
        if (inputText == this.solutions[index].toLowerCase().replace(/ /g, '')) {
            this.correctArray[index] = true;
            if (this.areAllCorrect()) {
                this.allCorrect = true;
            }
        }
    }

    areAllCorrect(): boolean {
        return this.correctArray.every(value => value === true);
    }

    navigateForward() {
        this.router.navigate(['tasks/two']);
    }

}
