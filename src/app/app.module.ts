import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StartComponent} from './start/start.component';
import {TaskOneComponent} from './tasks/task-one/task-one.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {IntroComponent} from './intro/intro.component';
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {TaskTwoComponent} from './tasks/task-two/task-two.component';
import {TaskThreeComponent} from './tasks/task-three/task-three.component';
import {TaskFourComponent} from './tasks/task-four/task-four.component';
import {TaskFiveComponent} from './tasks/task-five/task-five.component';
import {TaskSixComponent} from './tasks/task-six/task-six.component';
import {TaskSevenComponent} from './tasks/task-seven/task-seven.component';
import {TaskEightComponent} from './tasks/task-eight/task-eight.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {LocalizerComponent} from './tasks/localizer/localizer.component';
import {DragDropModule} from "@angular/cdk/drag-drop";
import {TaskNineComponent} from './tasks/task-nine/task-nine.component';
import {TaskTenComponent} from './tasks/task-ten/task-ten.component';

@NgModule({
    declarations: [
        AppComponent,
        StartComponent,
        TaskOneComponent,
        IntroComponent,
        TaskTwoComponent,
        TaskThreeComponent,
        TaskFourComponent,
        TaskFiveComponent,
        TaskSixComponent,
        TaskSevenComponent,
        TaskEightComponent,
        LocalizerComponent,
        TaskNineComponent,
        TaskTenComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        ReactiveFormsModule,
        MatSlideToggleModule,
        FormsModule,
        DragDropModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
