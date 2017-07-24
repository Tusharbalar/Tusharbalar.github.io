import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { GithubComponent } from './components/github/github.component';
import { rootRouterConfig } from './app.routes';
import { AlertModule } from 'ngx-bootstrap';
import { GithubService } from './providers/github.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true }),
    AlertModule.forRoot()
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
