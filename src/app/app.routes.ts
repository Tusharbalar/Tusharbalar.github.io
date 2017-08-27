import { Routes } from '@angular/router';
import { GithubComponent } from './components/github/github.component';
import { ReduxDemoComponent } from './components/redux-demo/redux-demo.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: GithubComponent },
  { path: 'redux-demo', component: ReduxDemoComponent }
];
