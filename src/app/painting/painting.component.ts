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
import { artListAnimationComponent } from '../animation_factory/art-list-animation.component';

@Component({
  selector: 'app-painting',
  templateUrl: './painting.component.html',
  styleUrls: ['./painting.component.scss']
})

export class PaintingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
