import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {

	theMessage: string = 'No Color';

	colorRed(): void {
		this.theMessage = "Red";
	}
	colorGreen(): void {
		this.theMessage = "Green";
	}
	colorBlue(): void {
		this.theMessage = "Blue";
	}

  constructor() { }

  ngOnInit() {
  }

}
