import { Component, OnInit } from '@angular/core';
import { Menu } from './menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuItems: Menu[] = [
    new Menu('USERLIST', '/userlist', 'User list menu item'),
    new Menu('USER', '/user', 'User menu item'),
    new Menu('HOME', '/home', 'Home menu item'),
    new Menu('RESUME', '/resume', 'My Resume'),
    new Menu('PLAYGROUND', '/playground', 'The Playground'),
    new Menu('ABOUT', '/about', 'About menu item')
  ];

  constructor() { }

  ngOnInit() {
  }

}
