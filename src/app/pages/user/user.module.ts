import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
        UserRoutingModule
    ]
})
export class UserModule { }