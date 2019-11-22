import { RouteGuard } from './services/route-guard.service';
import { AppComponent } from './app.component';
import * as containers from './containers'
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: containers.HomeComponent,
        canActivate: [RouteGuard],
        data: {
            redirect: ['/login']
        }
    },
    { 
        path: 'login',
        pathMatch: 'full',
        component: containers.LoginComponent
    },
    {
        path: 'register',
        pathMatch: 'full',
        component: containers.RegisterComponent
    },
    {
        path: '**',
        redirectTo: '/',
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }