import { TestResultsComponent } from './ideas/test-results/test-results.component';
import { IdeasCoursesComponent } from './ideas/ideas-courses/ideas-courses.component';
import { IdeasHomeComponent } from './ideas/ideas-home/ideas-home.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
const routes: Routes = [
  {
    path: 'ideasHome', component: IdeasHomeComponent
  },
  {
    path: 'ideasCourses', component: IdeasCoursesComponent
  },
  {
    path: 'ideasTestAndResults', component: TestResultsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [IdeasHomeComponent, IdeasCoursesComponent, TestResultsComponent];

