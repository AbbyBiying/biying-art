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

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: artAnimations,

})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  state: string = 'inactive';
  nameState: string = 'together';
  cvState: string = "cvbefore";
  bioState: string = "biosmall";
  imgState: string = "imgin";
  leftState: string = "left";
  rightState: string = "right";
  scrollState: string = "*";
  
  imgInOut(){
    this.imgState = this.imgState === 'imgin' ? 'imgout' : 'imgin';
    console.log(this.imgState);  
  }

  nameUpDown() {
    this.nameState = this.nameState === 'apart' ? 'together' : 'apart';
    console.log(this.nameState);
  };  

  bioActive() {
    this.bioState = this.bioState === 'biosmall' ? 'biobig' : 'biosmall';
    console.log(this.bioState);
  };

  cvActive() {
    this.cvState = this.cvState === 'cvbefore' ? 'cvafter' : 'cvbefore';
    console.log(this.cvState);
  };

  leftActive() {
    this.leftState = this.leftState === 'left' ? 'right' : 'left';
    console.log(this.leftState);
  };  

  rightActive() {
    this.rightState = this.rightState === 'right' ? 'left' : 'right';
    console.log(this.rightState);
  };  

  // scrollFire() {
  //   this.scrollState = this.scrollState === '*' ? 'void' : '*';
  //   console.log("appeared");
  // }
}
