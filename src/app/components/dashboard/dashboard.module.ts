import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { dashboardRoutes } from './dashboard-routes';
import {CoursesComponent} from "./courses/courses.component";
import {TeachersComponent} from "./teachers/teachers.component";
import {ContactsComponent} from "./contacts/contacts.component";
import {AboutModule} from "./about/about.module";
@NgModule({
    declarations: [
        CoursesComponent,
        TeachersComponent,
        ContactsComponent,
    ],
    exports: [
    ],
    imports: [
        CommonModule,
        AboutModule,
        RouterModule.forChild(dashboardRoutes),
    ]
})
export class DashboardModule { }
