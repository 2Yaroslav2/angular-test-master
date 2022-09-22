import {CollegeComponent} from "./about/components/college/college.component";
import {ContactsComponent} from "./contacts/contacts.component";
import {CoursesComponent} from "./courses/courses.component";
import {TeachersComponent} from "./teachers/teachers.component";


export const dashboardRoutes = [
  { path: '', pathMatch: 'full', redirectTo: 'about' },
  {
    path: 'about',
    component: CollegeComponent
  },
  {
    path: 'contact',
    component: ContactsComponent
  },
  {
    path: 'course',
    component: CoursesComponent
  },
  {
    path: 'teacher',
    component: TeachersComponent
  },
];

