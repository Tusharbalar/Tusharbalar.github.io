import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { GithubComponent } from './components/github/github.component';
import { rootRouterConfig } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
