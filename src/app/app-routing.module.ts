import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StartComponent} from "./start/start.component";
import {TaskOneComponent} from "./tasks/task-one/task-one.component";
import {IntroComponent} from "./intro/intro.component";
import {TaskTwoComponent} from "./tasks/task-two/task-two.component";
import {TaskThreeComponent} from "./tasks/task-three/task-three.component";
import {TaskFourComponent} from "./tasks/task-four/task-four.component";
import {TaskFiveComponent} from "./tasks/task-five/task-five.component";
import {TaskSixComponent} from "./tasks/task-six/task-six.component";
import {TaskSevenComponent} from "./tasks/task-seven/task-seven.component";
import {TaskEightComponent} from "./tasks/task-eight/task-eight.component";
import {TaskNineComponent} from "./tasks/task-nine/task-nine.component";
import {TaskTenComponent} from "./tasks/task-ten/task-ten.component";

const routes: Routes = [
    {
        path: 'start',
        component: StartComponent,
    },
    {
        path: 'tasks/one',
        component: TaskOneComponent,
    },
    {
        path: 'tasks/two',
        component: TaskTwoComponent,
    },
    {
        path: 'tasks/three',
        component: TaskThreeComponent,
    },
    {
        path: 'tasks/four',
        component: TaskFourComponent,
    },
    {
        path: 'tasks/five',
        component: TaskFiveComponent,
    },
    {
        path: 'tasks/six',
        component: TaskSixComponent,
    },
    {
        path: 'tasks/seven',
        component: TaskSevenComponent,
    },
    {
        path: 'tasks/eight',
        component: TaskEightComponent,
    },
    {
        path: 'tasks/nine',
        component: TaskNineComponent,
    },
    {
        path: 'tasks/ten',
        component: TaskTenComponent,
    },
    {
        path: 'intro',
        component: IntroComponent,
    },
    {path: '**', redirectTo: 'start', pathMatch: 'full'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
