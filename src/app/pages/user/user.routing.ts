import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Pages
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

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