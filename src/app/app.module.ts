import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { GithubComponent } from './components/github/github.component';
import { rootRouterConfig } from './app.routes';
import { GithubService } from './providers/github.service';
import { HttpModule, XHRBackend, RequestOptions } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

import { IAppState, rootReducer, INITIAL_STATE } from './store';
import { NgRedux, NgReduxModule } from 'ng2-redux';
import { ReduxDemoComponent } from './components/redux-demo/redux-demo.component';
import { TodoOverviewComponent } from './components/todo/todo-overview/todo-overview.component';



@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    ReduxDemoComponent,
    TodoOverviewComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(rootRouterConfig),
    NgReduxModule
  ],
  providers: [
    GithubService,
    { provide: LocationStrategy, useClass: PathLocationStrategy }],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
