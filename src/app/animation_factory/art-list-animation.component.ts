import { Component, ElementRef, HostListener, Input } from '@angular/core';

import {
  AnimationBuilder,
  AnimationAnimateMetadata,
  AnimationFactory,
  AnimationMetadata, 
  AnimationMetadataType, 
  AnimationPlayer,
  useAnimation, 
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  group
} from '@angular/animations';
 
import { Art } from './art.service';
 
@Component({
  selector: 'art-list-animation',
  //templateUrl: '../portfolio/portfolio.component.html',
  template:`
    <ul>here are arts:
      <li *ngFor="let art of arts"
          [@artState]="art.state"
          (click)="art.toggleState()">
        {{art.name}}
      </li>
    </ul>
    <p [@myAwesomeAnimation]='state' (click)="animateActive()">active or not</p>
    <p [@flyInOut]='state' (click)="animateflyInOut()">in and out animation</p>
    <p [@shrinkOut]='state' (click)="animateShrink()">shrink!!!</p>
    <p [@mySecondAnimation]='state' (click)="animateSize()">small and large</p>
    <p [@parallelFlyInOut]='state' (click)="parallelAnimation()">parallelAnimation</p>
    <p [@parallelFlyInOut]='state' (click)="parallelAnimation()">parallelAnimation</p>
    <p [@parallelFlyInOut]='state' (click)="parallelAnimation()">parallelAnimation</p>

  `,

  styles: [`
    p {
      color:white;
      width:500px;
      background:black;
      margin: 100px auto;
      text-align:center;
      padding:20px;
      font-size:1.5em;
    }
  `],

  animations: [
     trigger('artState', [
       state('inactive', style({color: 'white', backgroundColor: 'blue', transform: 'translateX(0) scale(1)'})),
       state('active',   style({color: 'red', backgroundColor: 'yellow', transform: 'translateX(0) scale(4.1)'})),
       transition('inactive => active', animate('100ms ease-in')),
       transition('active => inactive', animate('100ms ease-out')),
       transition('void => inactive', [
         style({transform: 'translateX(-100%) scale(1)'}),
         animate(1000)
       ]),
       transition('inactive => void', [
         animate(1000, style({transform: 'translateX(100%) scale(1)'}))
       ]),
       transition('void => active', [
         style({transform: 'translateX(0) scale(0)'}),
         animate(2000)
       ]),
       transition('active => void', [
         animate(2000, style({transform: 'translateX(0) scale(0)'}))
       ])
     ]), 

     trigger('myAwesomeAnimation', [
       state('inactive', style({transform: 'translateX(0) scale(1)'})),
       state('active',   style({transform: 'translateX(0) scale(2.1)'})),
       transition('inactive => active', animate('100ms ease-in')),
       transition('active => inactive', animate('1000ms ease-out')),
       transition('void => inactive', [
         style({ backgroundColor: 'blue', transform: 'translateX(-100%) scale(1)'}),
         animate('1000ms ease-in')
       ]),
       transition('inactive => void', [
         animate(1000, style({ backgroundColor: 'red',transform: 'translateX(100%) scale(2)'}))
       ]),
       transition('void => active', [
         style({transform: 'translateX(0) scale(3)'}),
         animate(7000, style({ backgroundColor: 'green'}))
       ]),
       transition('active => void', [
         animate(8000, style({ backgroundColor: 'black', transform: 'translateX(0) scale(5)'}))
       ])
     ]),
    
      // trigger('flyInOut', [
      //   state('in', style({opacity: 1, transform: 'translateX(0)'})),
      //   transition('void => *', [
      //     style({
      //       opacity: 0,
      //       transform: 'translateX(-100%)'
      //     }),
      //     animate('0.2s ease-in')
      //   ]),
      //   transition('* => void', [
      //     animate('0.2s 0.1s ease-out', style({
      //       backgroundColor:'blue',
      //       opacity: 0,
      //       transform: 'translateX(100%)'
      //     }))
      //   ])
      // ]),

     trigger('flyInOut', [
       state('in', style({transform: 'translateX(0)'})),
       transition('void => *', [
         animate(300, keyframes([
           style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
           style({opacity: 1, transform: 'translateX(15px)',  offset: 0.3}),
           style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
         ]))
       ]),
       transition('* => void', [
         animate(300, keyframes([
           style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
           style({opacity: 1, transform: 'translateX(-15px)', offset: 0.7}),
           style({opacity: 0, transform: 'translateX(100%)',  offset: 1.0})
         ]))
       ])
     ]),

      trigger('mySecondAnimation', [
        state('small', style({
           backgroundColor: 'blue',
           transform: 'scale(1)',
       })),
       state('large', style({
           backgroundColor: 'red',
           transform: 'scale(5.2)',
       })),

       transition('small <=> large', animate('1800ms ease-in', keyframes([
         style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
         style({opacity: 1, transform: 'translateY(35px)',  offset: 0.3}),
         style({opacity: 1, transform: 'translateX(25%)',     offset: 1.0})
       ]))),
     ]),
    
      trigger('parallelFlyInOut', [
        state('in', style({width: 120, transform: 'translateX(0)', opacity: 1})),
        transition('void => *', [
          style({width: 100, transform: 'translateX(50px)', opacity: 0}),
          group([
            animate('0.3s 0.1s ease', style({
              transform: 'translateX(0)',
              width: 1200
            })),
            animate('0.3s ease', style({
              opacity: 1
            }))
          ])
        ]),

        transition('* => void', [
          group([
            animate('0.3s ease', style({
              transform: 'translateX(50px)',
              width: 10
            })),
            animate('0.3s 0.2s ease', style({
              opacity: 0
            }))
          ])
        ])
      ]),

     trigger('shrinkOut', [
       state('in', style({height: '*'})),
       transition('* => void', [
         style({height: '*'}),
         animate(2500, style({height: 0}))
     ])
   ])

   ]
})

//export group(steps: AnimationMetadata[]) : AnimationGroupMetadata
export class artListAnimationComponent {
  arts: Art[] = [ new Art("Painting", "active"), new Art("Ceramic", "inactive")];

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