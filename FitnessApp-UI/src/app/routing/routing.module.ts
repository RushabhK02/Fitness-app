import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from '../app.component';
import { WelcomeComponent } from '../welcome/welcome.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { QuestionnaireComponent } from '../questionnaire/questionnaire.component';
import { UserNavBarComponent } from '../user-nav-bar/user-nav-bar.component';
import { UserViewComponent } from '../user-view/user-view.component';
import { UserHomeContentComponent } from '../user-home-content/user-home-content.component';
import { UserMyPlanComponent } from '../user-my-plan/user-my-plan.component';
import { PreviousPlansComponent } from '../previous-plans/previous-plans.component';
import { MyActivityComponent } from '../my-activity/my-activity.component';
import { AdminViewComponent } from '../admin-view/admin-view.component';
import { AdminNavBarComponent } from '../admin-nav-bar/admin-nav-bar.component';
import { AdminHomeContentComponent } from '../admin-home-content/admin-home-content.component';
import { ClientsComponent } from '../clients/clients.component';
import { NotificationsComponent } from '../notifications/notifications.component';
import { CreateWorkoutComponent } from '../create-workout/create-workout.component';
import { CreateDietComponent } from '../create-diet/create-diet.component';
import { DeleteDietComponent } from '../delete-diet/delete-diet.component';
import { DeleteWorkoutComponent } from '../delete-workout/delete-workout.component';
import { AssignPlanComponent } from '../assign-plan/assign-plan.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { AdminViewActivityComponent } from '../admin-view-activity/admin-view-activity.component';
import { AdminViewProfileComponent } from '../admin-view-profile/admin-view-profile.component';
import { UserTypeGuard } from '../user-type.guard';
import { AdminTypeGuard } from '../admin-type.guard';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: 'questions', component: QuestionnaireComponent },
  {
    path: 'userHome', component: UserViewComponent, canActivate : [UserTypeGuard] , children: [
      { path: '', component: UserNavBarComponent, outlet: 'navBar' },
      { path: '', component: UserHomeContentComponent, outlet: 'content' },
      { path: 'redirectToHome', component: UserHomeContentComponent, outlet: 'content' },
      { path: 'myPlan', component: UserMyPlanComponent, outlet: 'content' },
      { path: 'previousPlans', component: PreviousPlansComponent, outlet: 'content' },
      { path: 'myActivity', component: MyActivityComponent, outlet: 'content' },
      { path: 'profile', component: UserProfileComponent, outlet: 'content' }
    ]
  },
  {
    path: 'adminHome', component: AdminViewComponent, canActivate : [AdminTypeGuard] , children: [

      { path: '', component: AdminNavBarComponent, outlet: 'navBar' },
      { path: '', component: AdminHomeContentComponent, outlet: 'content' },
      { path: 'redirectToHome', component: AdminHomeContentComponent, outlet: 'content' },
      { path: 'clients', component: ClientsComponent, outlet: 'content' },
      { path: 'notifications', component: NotificationsComponent, outlet: 'content' },
      { path: 'newWorkout', component: CreateWorkoutComponent, outlet: 'content' },
      { path: 'newDiet', component: CreateDietComponent, outlet: 'content' },
      { path: 'deleteDiet', component: DeleteDietComponent, outlet: 'content' },
      { path: 'deleteWorkout', component: DeleteWorkoutComponent, outlet: 'content' },
      { path: 'assign', component: AssignPlanComponent, outlet: 'content' },
      { path: 'activity/:id', component: AdminViewActivityComponent, outlet: 'content' },
      { path: 'profile/:id', component: AdminViewProfileComponent, outlet: 'content' },

    ]
  }
];



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  declarations: []
})
export class RoutingModule { }
