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
import { AppearDirective } from '../attribute-directive/appear.directive';
import { ArtService } from '../animations/art.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: artAnimations,
})

export class AboutComponent implements OnInit {
  language: number = 1;
  
  ngOnInit() {
  }

  constructor(private artService: ArtService) { }
  
  state: string = "inactive";
  nameState: string = "together";
  cvState: string = "cvbefore";
  bioState: string = "biosmall";
  imgState: string = "imgin";
  leftState: string = "left";
  rightState: string = "right";
  scrollState: string = "*";
  
  imgInOut(){
    this.imgState = this.imgState === 'imgin' ? 'imgout' : 'imgin';
  }

  nameUpDown() {
    this.nameState = this.nameState === 'apart' ? 'together' : 'apart';
  };  

  bioActive() {
    this.bioState = this.bioState === 'biosmall' ? 'biobig' : 'biosmall';
  };

  cvActive() {
    this.cvState = this.cvState === 'cvbefore' ? 'cvafter' : 'cvbefore';
  };

  leftActive() {
    this.leftState = this.leftState === 'left' ? 'right' : 'left';
  };  

  rightActive() {
    this.rightState = this.rightState === 'right' ? 'left' : 'right';
  };  

  // scrollFire() {
  //   this.scrollState = this.scrollState === '*' ? 'void' : '*';
  //   console.log("appeared");
  // }
}
