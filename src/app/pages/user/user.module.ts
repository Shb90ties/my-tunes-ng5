import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Pages
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

// Modules
import { UserRoutingModule } from './user.routing';

@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        CommonModule,
        UserRoutingModule
    ]
})
export class UserModule { }