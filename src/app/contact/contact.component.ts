import { Component, OnInit } from '@angular/core';

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

import { artAnimations } from '../animations/art-animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],  
  animations: artAnimations

})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  emailState: string = 'right';  

  emailActive() {
    this.emailState = this.emailState === '*' ? 'void' : '*';
    console.log(this.emailState);
  };
}
