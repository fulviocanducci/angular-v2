import { Component, OnInit } from '@angular/core';
import { User } from 'models/user';
import { Repository } from 'models/repository';
import { AppService } from '../app.service';

@Component({
  selector: 'app-githubuser',
  templateUrl: './githubuser.component.html',
  styleUrls: ['./githubuser.component.css']
})
export class GithubuserComponent implements OnInit {

  public user: User;
  public repository: Array<Repository>;
  public userName: string;

  constructor(private service: AppService) { }

  ngOnInit() {
    this.userName = '';
  }

  find() {
    this.user = null;
    this.repository = new Array<Repository>();
    this.service.getUserGithub(this.userName)
      .subscribe((user: User) => {
          this.user = user;
      }, error => {
        this.message();
      });
  }

  findRepository() {
    this.service.getUserGithubRepository(this.userName)
      .subscribe((repositories: Repository[]) => {
        this.repository = repositories;
        console.log(this.repository);
      });
  }

  clean() {
    this.user = null;
    this.repository = new Array<Repository>();
    this.userName = '';
  }

  private message(): void {
    swal('Erro', 'Usuário inválido');
  }

}
