import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '@servicesauth.service';
import {User} from '@models/user.model';
import {Role} from '@models/role.model';
import {environment} from '@environments/environment';

@Component({
  selector: 'page-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  currentUser: User;
  routing: Array<{text: string, value: string, icon: string}>;
  env = environment;

  constructor( private router: Router, private authenticationService: AuthenticationService) {
    this.routing = [
      {text: 'Pages', value: 'posts', icon: 'file_copy'},
      {text: 'Users', value: 'users', icon: 'people'}
    ];

    this.currentUser = this.authenticationService.currentUserValue;
  }

  get isAdmin() {
    return this.currentUser && this.currentUser.role === Role.Admin;
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
