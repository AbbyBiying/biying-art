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
	
  constructor() { }

  ngOnInit() {
  }
}