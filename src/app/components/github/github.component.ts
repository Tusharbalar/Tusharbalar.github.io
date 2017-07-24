import { Component } from '@angular/core';
import { GithubService } from '../../providers/github.service';

@Component({
    moduleId: module.id,
    selector: 'app-github',
    templateUrl: 'github.component.html'
})

export class GithubComponent {

  user: any;
  repos: any;
  username: any = 'Tusharbalar';

  constructor(private _githubService: GithubService) {
    this.user = false;
    this.search();
  }

  search() {
    this._githubService.updateUsername(this.username);

    this._githubService.getUser().subscribe(user => {
      this.user = user;
    });

    this._githubService.getRepos().subscribe(repos => {
      this.repos = repos;
      console.log(this.repos);
    });
  }

}
