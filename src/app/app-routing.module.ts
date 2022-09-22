import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { TexteditorComponent } from './texteditor/texteditor.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
const routes: Routes = [
  {path: ' ', component:HomeComponent},
  // {path: 'navbar', component:NavbarComponent},
  {path: 'home', component:HomeComponent},
  {path: 'about', component:AboutComponent},
  {path: 'contact', component:ContactComponent},
  {path:'texteditor',component:TexteditorComponent},
  {path:'adminlogin',component:AdminLoginComponent},
  {path: 'adduser', component:AddUserComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'user', component:UserComponent},
 // {path: 'userlist', component:UserListComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
