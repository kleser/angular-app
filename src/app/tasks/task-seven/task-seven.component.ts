import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-task-seven',
    templateUrl: './task-seven.component.html',
    styleUrls: ['./task-seven.component.css']
})
export class TaskSevenComponent {

    firstDone: boolean = false;

    constructor(private router: Router) {
    }

    changeFirst() {
        this.router.navigate(['tasks/eight']);
    }

}
