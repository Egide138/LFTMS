import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Lab1Component } from './lab1/lab1.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './app/login/login.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { SignupComponent } from './signup/signup.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdaminDashboardComponent } from './adamin-dashboard/adamin-dashboard.component';
import { LabMnagerDashboardComponent } from './lab-mnager-dashboard/lab-mnager-dashboard.component';
import { TechnicianDashboardComponent } from './technician-dashboard/technician-dashboard.component';
import { RTDAManagerDashboardComponent } from './rtda-manager-dashboard/rtda-manager-dashboard.component';
import { Lab3Component } from './lab3/lab3.component';
import { Lab2Component } from './lab2/lab2.component';
import { HomeUserDashboardComponent } from './home-user-dashboard/home-user-dashboard.component';
import { HomeUserApprovedComponent } from './home-user-approved/home-user-approved.component';
import { HomeTechnicianComponent } from './home-technician/home-technician.component';
import { FormsComponent } from './forms/forms.component';
import { ReportTechnicianComponent } from './report-technician/report-technician.component';
import { RegRolesComponent } from './reg-roles/reg-roles.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { SampleRecordComponent } from './sample-record/sample-record.component';
import { TestsResultsComponent } from './tests-results/tests-results.component';
import { HomeRTDAComponent } from './home-rtda/home-rtda.component';
import { RecordsRTDAComponent } from './records-rtda/records-rtda.component';
import { ModalComponent } from './modal/modal.component';
import { Table1Component } from './table1/table1.component';
import { SidebarComponent } from './sidebar/sidebar.component';
// /import { Lab1Component } from './lab1/lab1.component';

const routes: Routes = [
  // {
  //   path:'lab',
  //   component:Lab1Component,
  //   outlet:'lab'
  // }
  { path: '', component: HomeComponent },
  { path: 'app/login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Terms', component: TermsConditionsComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'UserDashboard',
    component: UserDashboardComponent,
    children: [
      {
        path: '',
        component: HomeUserDashboardComponent
      },
      {
        path: 'Approved',
        component: HomeUserApprovedComponent
      }
    ]

  },
  {
    path: 'AdminDashboard',
    component: AdaminDashboardComponent,
    children: [
      {
        path: '',
        component: HomeAdminComponent
      },
      {
        path: 'sampleRecords',
        component: SampleRecordComponent
      },
      {
        path: 'TestResults',
        component: TestsResultsComponent
      },
      {
        path: 'register',
        component: RegRolesComponent
      }

    ]
  },

  // {
  //   path: 'LabManager',
  //   component: LabMnagerDashboardComponent
  // },
  {
    path: 'LabManager',
    component: LabMnagerDashboardComponent,
    children: [
      {
        path: '',
        component: Lab1Component
      },
      {
        path: 'lab2',
        component: Lab2Component
      },
      {
        path: 'lab3',
        component: Lab3Component
      }


    ]
  },
  {
    path: 'Technician',
    component: TechnicianDashboardComponent,
    children: [

      {
        path: '',
        component: HomeTechnicianComponent
      },
      {
        path: 'forms',
        component: FormsComponent
      },
      {
        path: 'reports',
        component: ReportTechnicianComponent
      }
    ]
  },
  { 
    path: 'RTDAmanager', 
    component: RTDAManagerDashboardComponent,
    children:
    [
      {
        path: '',
        component: HomeRTDAComponent
      },
      {
        path: 'record',
        component: RecordsRTDAComponent
      },

    ]
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
