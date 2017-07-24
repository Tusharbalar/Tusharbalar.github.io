import { Routes } from '@angular/router';
import { GithubComponent } from './components/github/github.component';


export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: GithubComponent }
];
