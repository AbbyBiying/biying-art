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
    
  paintingState: string = '*';
  statementState: string = '*'

  paintingActive() {
    this.paintingState = this.paintingState === '*' ? 'void' : '*';
  };

  statementActive() {
    this.statementState = this.statementState === '*' ? 'void' : '*';
  };
}
