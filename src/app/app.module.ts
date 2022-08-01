import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
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
import { ModalComponent } from './modal/modal.component';
import { Table1Component } from './table1/table1.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Lab1Component } from './lab1/lab1.component';
import { Lab2Component } from './lab2/lab2.component';
import { Lab3Component } from './lab3/lab3.component';
import { HomeUserDashboardComponent } from './home-user-dashboard/home-user-dashboard.component';
import { HomeUserApprovedComponent } from './home-user-approved/home-user-approved.component';
import { FormsComponent } from './forms/forms.component';
import { HomeTechnicianComponent } from './home-technician/home-technician.component';
import { ReportTechnicianComponent } from './report-technician/report-technician.component';
import { LinkFormComponent } from './link-form/link-form.component';
import { LinkForm1Component } from './link-form1/link-form1.component';
import { LinkForm2Component } from './link-form2/link-form2.component';
import { LinkForm3Component } from './link-form3/link-form3.component';
import { LinkForm4Component } from './link-form4/link-form4.component';
import { LinkForm5Component } from './link-form5/link-form5.component';
import { LinkForm6Component } from './link-form6/link-form6.component';
import { LinkForm7Component } from './link-form7/link-form7.component';
import { LinkForm8Component } from './link-form8/link-form8.component';
import { LinkForm9Component } from './link-form9/link-form9.component';
import { LinkForm10Component } from './link-form10/link-form10.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { Table2Component } from './table2/table2.component';
import { ViewLabComponent } from './view-lab/view-lab.component';
import { TechViewComponent } from './tech-view/tech-view.component';
import { ReportViewComponent } from './report-view/report-view.component';
import { RegRolesComponent } from './reg-roles/reg-roles.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { AdminTableComponent } from './admin-table/admin-table.component';
import { SampleRecordComponent } from './sample-record/sample-record.component';
import { TestsResultsComponent } from './tests-results/tests-results.component';
import { HomeRTDAComponent } from './home-rtda/home-rtda.component';
import { RecordsRTDAComponent } from './records-rtda/records-rtda.component';
import { ApproveTestComponent } from './approve-test/approve-test.component';
//import {MatTableModule} from '@angular/material/table'; 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    TermsConditionsComponent,
    SignupComponent,
    UserDashboardComponent,
    AdaminDashboardComponent,
    LabMnagerDashboardComponent,
    TechnicianDashboardComponent,
    RTDAManagerDashboardComponent,
    ModalComponent,
    Table1Component,
    SidebarComponent,
    Lab1Component,
    Lab2Component,
    Lab3Component,
    HomeUserDashboardComponent,
    HomeUserApprovedComponent,
    FormsComponent,
    HomeTechnicianComponent,
    ReportTechnicianComponent,
    LinkFormComponent,
    LinkForm1Component,
    LinkForm2Component,
    LinkForm3Component,
    LinkForm4Component,
    LinkForm5Component,
    LinkForm6Component,
    LinkForm7Component,
    LinkForm8Component,
    LinkForm9Component,
    LinkForm10Component,
    FeedbackFormComponent,
    Table2Component,
    ViewLabComponent,
    TechViewComponent,
    ReportViewComponent,
    RegRolesComponent,
    HomeAdminComponent,
    AdminTableComponent,
    SampleRecordComponent,
    TestsResultsComponent,
    HomeRTDAComponent,
    RecordsRTDAComponent,
    ApproveTestComponent,
    //MatTableModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
