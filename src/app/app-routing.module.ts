import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PrivacyComponent } from './home/privacy/privacy.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: 'privacy', component: PrivacyComponent }
    ],
  },
  { path: 'register', component: RegisterComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
