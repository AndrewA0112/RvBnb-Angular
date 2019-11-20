import { RegisterFormComponent } from './register-form/register-form.component';
import { RouteGuard } from './services/route-guard.service';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: AppComponent,
        canActivate: [RouteGuard],
        data: {
            redirect: ['/login']
        }
    },
    { 
        path: 'login',
        pathMatch: 'full',
        component: LoginFormComponent 
    },
    {
        path: 'register',
        pathMatch: 'full',
        component: RegisterFormComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }