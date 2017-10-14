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
  selector: 'app-painting',
  templateUrl: './painting.component.html',
  styleUrls: ['./painting.component.scss'],
  animations: artAnimations
})

export class PaintingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onScroll() {
    console.log("SCROLLED");
  }
  
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
