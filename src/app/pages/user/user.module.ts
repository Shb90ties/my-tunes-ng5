import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Pages
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

// Modules
import { UserRoutingModule } from './user.routing';
import { UserHomeComponent } from './user-home/user-home.component';

@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent,
        UserHomeComponent
    ],
    imports: [
        CommonModule,
        UserRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule
    ]
})
export class UserModule { }