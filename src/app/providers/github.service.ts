import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {

  private username = 'Tusharbalar';
  private client_id = '35ce64cf5a3d9c08f7eb';
  private client_secret = 'b79cbce4aae66a562dde9abf888ad5bad1d91c14';

  constructor(private _http: Http) {
    console.log('Github service started...');
  }

  getUser() {
    const url = 'https://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret;
    return this._http.get(url).map(res => res.json());
  }

  getRepos() {
    const url = 'https://api.github.com/users/' + this.username + '/repos?client_id=' + this.client_id + '&client_secret=';
    return this._http.get(url + this.client_secret).map(res => res.json());
  }

  updateUsername(username: any) {
    this.username = username;
  }
}
