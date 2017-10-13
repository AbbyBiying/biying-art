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
  //arts: Art[] = [ new Art("Painting", "active"), new Art("Ceramic", "inactive")];

  state: string = 'inactive';
  animateSize() {
    this.state = this.state === 'small' ? 'large' : 'small';
  };
  animateActive() {
    this.state = this.state === 'active' ? 'inactive' : 'active';
  };
  animateflyInOut() {
    this.state = this.state === '*' ? 'void' : '*';
  };
  animateShrink() {
    this.state = this.state === 'void' ? 'in' : 'void';
  }
  parallelAnimation() {
    this.state = this.state === '*' ? 'void' : '*';
  }
}