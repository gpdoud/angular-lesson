import { Component, OnInit } from '@angular/core';

import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

	user: User

	showConsole(): void {
		console.log(this.user);
	}

  constructor() { }

  ngOnInit() {
  	// this.user = new User(1, 'adm', 'adm', 'greg', 'doud', '555-1212', 'info@maxtrain.com', true, true, true);
  	this.user = new User(0,'', '', '', '', '', '', false, false, false, new Date());
  	this.showConsole();
  }

}
