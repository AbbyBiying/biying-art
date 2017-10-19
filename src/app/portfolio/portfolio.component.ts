import { Component, OnInit } from '@angular/core';
import { artAnimations } from '../animations/art-animations'; 

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: artAnimations,

})
export class PortfolioComponent implements OnInit {
	color: string;
	selectedCodeValue: string;
  constructor() { }

  ngOnInit() {
  }
  openLink(){
    if (this.selectedCodeValue == "ABZ-EXCHANGE"){
    	window.open("https://github.com/AbbyBiying/ABZ_EXCHANGE","ABZ-EXCHANGE");
		};
    if (this.selectedCodeValue == "PAIRING"){
    	window.open("https://github.com/AbbyBiying/pairing","Pairing");
		};
    if (this.selectedCodeValue == "Biying-Art"){
    	window.open("https://github.com/AbbyBiying/biying-art","Biying-Art");
		};  
	}
}