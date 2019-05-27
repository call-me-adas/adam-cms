import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '@servicesauth.service';
import {User} from '@models/user.model';
import {Role} from '@models/role.model';

@Component({
  selector: 'page-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  currentUser: User;
  routing: Array<{text: string, value: string}>;

  constructor( private router: Router, private authenticationService: AuthenticationService) {
    this.routing = [
      {text: 'Posts', value: 'posts'},
      {text: 'Pages', value: 'pages'}
    ];
  }

  get isAdmin() {
    return this.currentUser && this.currentUser.role === Role.Admin;
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
