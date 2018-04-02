import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Pages
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserHomeComponent } from './user-home/user-home.component';

const routes: Routes = [
    {
        path: 'user',
        children: [
            {
                path: 'register',
                component: RegisterComponent
            },
            {
                path: 'login',
                redirectTo: ''
            },
            {
                path: ':id',
                component: UserHomeComponent
            },
            {
                path: '',
                component: LoginComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class UserRoutingModule { }