import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";

@Component({
    selector: 'app-task-five',
    templateUrl: './task-five.component.html',
    styleUrls: ['./task-five.component.css']
})
export class TaskFiveComponent {

    end: boolean = false;
    falseGuess: boolean = false;
    showImage = false;

    constructor(private router: Router) {
    }

    changeGame() {
        if (this.isArrayCorrect()) {
            this.end = true;
        } else {
            this.falseGuess = true;
        }
    }

    isArrayCorrect() {
        let isCorrect: boolean = false;
        if (this.dates[0] == 'Swing Kitchen mit länger Umarmig') {
            if (this.dates[1] == 'Erschte Kuss im Marzili') {
                if (this.dates[2] == 'Spaghetti Factory mit Rosegarte') {
                    if (this.dates[3] == 'Lausanne Musee Olympique') {
                        if (this.dates[4] == 'Erschts Träffä mit Ninas Mama bi mire Velotour') {
                            if (this.dates[5] == 'Zämää choo') {
                                if (this.dates[6] == 'Erschts mau Ässä bi Familie Bühler') {
                                    if (this.dates[7] == 'Thun Athletics Night') {
                                        if (this.dates[8] == 'Midsummer Run 4i am Morge') {
                                            if (this.dates[9] == 'Schöne Walk bi de Kängurus') {
                                                isCorrect = true;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return isCorrect;
    }

    dates = [
        'Midsummer Run 4i am Morge',
        'Lausanne Musee Olympique',
        'Schöne Walk bi de Kängurus',
        'Swing Kitchen mit länger Umarmig',
        'Zämää choo',
        'Thun Athletics Night',
        'Spaghetti Factory mit Rosegarte',
        'Erschts mau Ässä bi Familie Bühler',
        'Erschte Kuss im Marzili',
        'Erschts Träffä mit Ninas Mama bi mire Velotour',
    ];

    drop(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.dates, event.previousIndex, event.currentIndex);
    }

    redirect() {
        this.router.navigate(['tasks/six']);
    }

}
