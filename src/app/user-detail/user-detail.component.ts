import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { User } from '../user/user';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

	user: User;

  constructor(private UserSvc: UserService,
  				private router: Router,
  				private route: ActivatedRoute) { }

  ngOnInit() {
  	this.route.paramMap
  		.switchMap((params: ParamMap) =>
  			this.UserSvc.get(params.get('id')))
  		.subscribe((users: User[]) => this.user = users[0]);
  }

}
