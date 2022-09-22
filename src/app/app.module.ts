import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserService } from './service/user.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from  'primeng/button';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { TexteditorComponent } from './texteditor/texteditor.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FilterPipe } from 'src/filter.pipe';
import { DocumentEditorModule } from '@txtextcontrol/tx-ng-document-editor';
import { TestComponent } from './test/test.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ContactComponent,
    AboutComponent,
    FilterPipe,
    UserListComponent,
    AddUserComponent,
    TexteditorComponent,
    TestComponent,
    AdminLoginComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DocumentEditorModule,
    BrowserAnimationsModule,

    ButtonModule,
    TableModule,
    CalendarModule,
    SliderModule,
    

    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularEditorModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
