import {AfterViewInit, Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-task-four',
    templateUrl: './task-four.component.html',
    styleUrls: ['./task-four.component.css']
})
export class TaskFourComponent implements AfterViewInit {

    isStreet: boolean = false;
    isLight: boolean = false;
    isThere: boolean = false;
    inCorrect: boolean = false;
    orderGame: boolean = false;
    areLightsCorrect: boolean = false;

    constructor(private router: Router) {
    }

    ngAfterViewInit() {
    }

    changeContentOne() {
        this.isStreet = true;
    }

    changeContentTwo() {
        this.isThere = true;
    }

    changeContentThree() {
        this.router.navigate(['tasks/five']);
    }

    checkLights(event: any) {
        let input: number = event.target.value;
        if (input == 28) {
            this.areLightsCorrect = true;
            this.inCorrect = false;
        } else {
            this.inCorrect = true;
        }
    }

    checkLight() {
        if (this.areLightsCorrect) {
            this.isLight = true;
        }
    }
}
