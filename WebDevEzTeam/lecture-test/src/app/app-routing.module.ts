import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HeaderComponent } from './header/header.component';
import { TitlePageComponent } from './title-page/title-page.component';
import { WorkOnYourselfComponent } from './work-on-yourself/work-on-yourself.component';
import { DietaryComponent } from './dietary/dietary.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { SupplementInfoComponent } from './supplement-info/supplement-info.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path: "",
    component: TitlePageComponent,
  },
  {
    path:'work-on-yourself',
    component: WorkOnYourselfComponent,
  },
  {
    path:'dietary',
    component:DietaryComponent,
  },
  {
    path:'exercises',
    component:ExercisesComponent
  },
  {
    path:'supplement-info',
    component:SupplementInfoComponent,
  },
  {
    path:'sign-in',
    component:LoginComponent,
  }
  // {
  // },
  // {
  //   path: '',
  //   component: '',
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
