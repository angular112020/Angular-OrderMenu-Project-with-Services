import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/pages/login/login.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import {ReactiveFormsModule} from '@angular/forms';
import { EmployeeRegistrationComponent } from './components/pages/employee-registration/employee-registration.component';
import { OrderMenuComponent } from './components/pages/order-menu/order-menu.component'
import {FormsModule} from '@angular/forms';
import { ConfirmpasswordDirective } from './tools/utils/confirmpassword.directive';
import { EmployeeTodoComponent } from './components/pages/employee-todo/employee-todo.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FilterEmployeePipe } from './tools/pips/filter-employee.pipe';
import {HttpClientModule} from '@angular/common/http';
import { OrderNowComponent } from './components/pages/order-now/order-now.component'
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    EmployeeRegistrationComponent,
    OrderMenuComponent,
    ConfirmpasswordDirective,
    EmployeeTodoComponent,
    FilterEmployeePipe,
    OrderNowComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
