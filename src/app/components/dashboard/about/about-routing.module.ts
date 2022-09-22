import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CollegeComponent } from "./components/college/college.component";

const routes: Routes = [
  {
    path: "",
    component: CollegeComponent
  },
  { path: "**", redirectTo: "not-found" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule {}
