import { AddCertificateComponent } from './add-certificate/add-certificate.component';
import { CourseInformationComponent } from './course-information/course-information.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModulesLessonsComponent } from './modules-lessons/modules-lessons.component';

const routes: Routes = [
  {
    path: '',
    component: CourseInformationComponent
  },
  { path: 'CourseInformation', component: CourseInformationComponent },
  { path: 'ModulesLessons', component: ModulesLessonsComponent },
  { path: 'AddCertificate', component: AddCertificateComponent },
  {
    path: 'CourseInformation',
    component: CourseInformationComponent,
    // resolve: { resolvedData: SelectParticipantResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule {}
