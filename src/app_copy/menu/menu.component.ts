import { Component, OnInit } from '@angular/core';
import { Menu } from './menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuItems: Menu[] = [
    new Menu('HOME', '/home', 'Home menu item'),
    new Menu('RESUME', '/resume', 'My Resume'),
    new Menu('ABOUT', '/about', 'About menu item')
  ];

  constructor() { }

  ngOnInit() {
  }

}
