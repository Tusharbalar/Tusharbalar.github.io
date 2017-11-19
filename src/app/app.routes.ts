import { Routes } from '@angular/router';
import { GithubComponent } from './components/github/github.component';
import { ReduxDemoComponent } from './components/redux-demo/redux-demo.component';
import { TodoOverviewComponent } from './components/todo/todo-overview/todo-overview.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: GithubComponent },
  { path: 'redux-demo', component: TodoOverviewComponent }
];
