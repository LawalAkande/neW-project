import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';

const routes: Routes = [
  // {
  //   path:'', component: DashboardComponent
  // },
  // {
  //   path:'courses', component: CoursesComponent

  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
