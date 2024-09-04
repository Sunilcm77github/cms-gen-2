import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UsersComponent } from './users/users.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';

export const routes: Routes = [
    {path:'', redirectTo:'signin', pathMatch:'full'},
    {'path': 'home', title:'CMS | Home', component: HomeComponent},
    {'path': 'about',title:'CMS | About', component:AboutComponent},
    {'path': 'user',title:'CMS | User', component: UsersComponent},
    {path: 'contactus',title:'CMS | ContactUs', component: ContactUsComponent},
    {path: 'signup',title:'CMS | SignUp!', component: SignUpComponent},
    {path: 'signin',title:'CMS | SignIn', component: SignInComponent},
    {path:'forgotpassword', title:'CMS | Forgot Password', component:ForgotPasswordComponent},
    {path:'**', component: PageNotFoundComponent}
    
];
