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
    state('inactive', style({transform: 'translateX(0) scale(1)'})),
    state('active',   style({transform: 'translateX(0) scale(2.1)'})),
    transition('inactive => active', animate('100ms ease-in')),
    transition('active => inactive', animate('1000ms ease-out')),
    transition('void => inactive', [
      style({ backgroundColor: 'blue', transform: 'translateX(-100%) scale(1)'}),
      animate(1000)
    ]),
    transition('inactive => void', [
      animate(1000, style({ backgroundColor: 'red',transform: 'translateX(100%) scale(2)'}))
    ]),
    transition('void => active', [
      style({transform: 'translateX(0) scale(3)'}),
      animate(200, style({ backgroundColor: 'green'}))
    ]),
    transition('active => void', [
      animate(200, style({ backgroundColor: 'black', transform: 'translateX(0) scale(5)'}))
    ])
  ])
]
  // animations: [
  //   trigger('myAwesomeAnimation', [
  //       state('small', style({
  //           backgroundColor: 'blue',
  //           transform: 'scale(1)',
  //       })),
  //       state('large', style({
  //           backgroundColor: 'red',
  //           transform: 'scale(5.2)',
  //       })),

  //       transition('small <=> large', animate('1800ms ease-in', keyframes([
  //         style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
  //         style({opacity: 1, transform: 'translateY(35px)',  offset: 0.3}),
  //         style({opacity: 1, transform: 'translateX(25%)',     offset: 1.0})
  //       ]))),
  //   ]),
  // ] 
})
export class artListBasicComponent {
    //state: string = 'small';

  //   animateMe() {
  //     this.state = (this.state === 'small' ? 'large' : 'small');
  // }

    state: string = 'inactive';
    animateMe() {
    this.state = this.state === 'active' ? 'inactive' : 'active';
  }
}