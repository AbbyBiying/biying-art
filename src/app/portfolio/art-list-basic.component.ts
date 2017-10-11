import { Component, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';
 
import { art } from './art.service';
 
@Component({
  selector: 'art-list-basic',
 
  template: `
    <p [@myAwesomeAnimation]='state' (click)="animateMe()">try animation</p>
  `,

styles: [`
  p {
    color:white;
    width:200px;
    background:lightgray;
    margin: 100px auto;
    text-align:center;
    padding:20px;
    font-size:1.5em;
  }
  `],
  
  animations: [
    trigger('myAwesomeAnimation', [
        state('small', style({
            backgroundColor: 'blue',
            transform: 'scale(1)',
        })),
        state('large', style({
            backgroundColor: 'red',
            transform: 'scale(2.2)',
        })),

        transition('small <=> large', animate('800ms ease-in', keyframes([
          style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
          style({opacity: 1, transform: 'translateY(35px)',  offset: 0.5}),
          style({opacity: 1, transform: 'translateY(0)',     offset: 1.0})
        ]))),
    ]),
  ] 
})
export class artListBasicComponent {
    state: string = 'small';

    animateMe() {
      this.state = (this.state === 'small' ? 'large' : 'small');
  }
}