import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { CoursesComponent } from './courses/courses.component';
import { LogingComponent } from './loging/loging.component';
// import { CourseInformationComponent } from './courses/course-information/course-information.component';
import { CoursesService } from './courses.service';
import { FooterComponent } from './footer/footer.component';
// import { IdeasCoursesComponent } from './ideas/ideas-courses/ideas-courses.component';
import { IdeasLoginComponent } from './ideas/ideas-login/ideas-login.component';
// import { IdeasHomeComponent } from './ideas/ideas-home/ideas-home.component';
import { IdeasHeaderComponent } from './ideas/ideas-header/ideas-header.component';
import { IdeasFooterComponent } from './ideas/ideas-footer/ideas-footer.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { TestResultsComponent } from './ideas/test-results/test-results.component';

const appRoute: Routes = [
  // {
  //   path: '', component: DashboardComponent
  // },
  {
    path: 'courses', component: CoursesComponent

  }
];

@NgModule({
  declarations: [
    AppComponent,
    // DashboardComponent,
    LogingComponent,
    CoursesComponent,
    NavbarComponent,
    // CourseInformationComponent,
    FooterComponent,
    // IdeasCoursesComponent,
    IdeasLoginComponent,
    // IdeasHomeComponent,
    IdeasHeaderComponent,
    IdeasFooterComponent,
    RoutingComponents,
    // TestResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    MatSliderModule,
    MatCheckboxModule,
    MatBadgeModule,
    MatIconModule,
    MatButtonModule,
    RouterModule.forRoot([
      // {
      //   path: 'ideasHome', component: IdeasHomeComponent
      // },
      {
        path: 'login', component: IdeasLoginComponent
      },
      // {
      //   path: 'ideasCourses', component: IdeasCoursesComponent
      // },
      {
        path: 'courses', component: CoursesComponent
      }
    ]),
    BrowserAnimationsModule
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
