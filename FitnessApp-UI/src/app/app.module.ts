import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
// import {AnimateOnScrollModule} from 'ng2-animate-on-scroll';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';
import { DataTableModule,SharedModule, DropdownModule } from "primeng/primeng";
import {TableModule} from 'primeng/table';
import {TabViewModule} from 'primeng/tabview';
import { StorageServiceModule } from 'angular-webstorage-service';
import {CalendarModule} from 'primeng/calendar';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { RoutingModule } from './routing/routing.module';
import { UserNavBarComponent } from './user-nav-bar/user-nav-bar.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UserHomeContentComponent } from './user-home-content/user-home-content.component';
import { UserMyPlanComponent } from './user-my-plan/user-my-plan.component';
import { PreviousPlansComponent } from './previous-plans/previous-plans.component';
import { MyActivityComponent } from './my-activity/my-activity.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { AdminNavBarComponent } from './admin-nav-bar/admin-nav-bar.component';
import { AdminHomeContentComponent } from './admin-home-content/admin-home-content.component';
import { ClientsComponent } from './clients/clients.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { CreateWorkoutComponent } from './create-workout/create-workout.component';
import { CreateDietComponent } from './create-diet/create-diet.component';
import { DeleteWorkoutComponent } from './delete-workout/delete-workout.component';
import { DeleteDietComponent } from './delete-diet/delete-diet.component';
import { AssignPlanComponent } from './assign-plan/assign-plan.component';
import { LoginCredentials } from './login-credentials';
import { UserService } from './user.service';
import { AdminService } from './admin.service';
import { UserDataStorageService } from './user-data-storage.service';
import { Plan } from './plan';
import { User } from './user';
import { Admin } from './admin';
import { SignUpService } from './sign-up.service';
import { ClientRowComponent } from './client-row/client-row.component';
import { AdminViewActivityComponent } from './admin-view-activity/admin-view-activity.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AdminDataStorageService } from './admin-data-storage.service';
import { AdminViewProfileComponent } from './admin-view-profile/admin-view-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SignUpComponent,
    QuestionnaireComponent,
    UserNavBarComponent,
    UserViewComponent,
    UserHomeContentComponent,
    UserMyPlanComponent,
    PreviousPlansComponent,
    MyActivityComponent,
    AdminViewComponent,
    AdminNavBarComponent,
    AdminHomeContentComponent,
    ClientsComponent,
    NotificationsComponent,
    CreateWorkoutComponent,
    CreateDietComponent,
    DeleteWorkoutComponent,
    DeleteDietComponent,
    AssignPlanComponent,
    ClientRowComponent,
    AdminViewActivityComponent,
    UserProfileComponent,
    AdminViewProfileComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    DataTableModule,
    TableModule,
    TabViewModule,
    DropdownModule,
    HttpClientModule,
    StorageServiceModule,
    CalendarModule
  ],
  providers: [
    LoginCredentials,
    UserService,
    UserDataStorageService,
    SignUpService,
    AdminDataStorageService,
    AdminService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
