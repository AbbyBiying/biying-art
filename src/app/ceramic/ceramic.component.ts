import { Component, OnInit } from '@angular/core';
import { myCeramics } from './ceramics';
import { MatDialog } from '@angular/material';
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

import { CeramicDialogComponent } from './ceramic-dialog/ceramic-dialog.component';

@Component({
  selector: 'app-ceramic',
  templateUrl: './ceramic.component.html',
  styleUrls: ['./ceramic.component.scss'],
  animations: artAnimations
})
export class CeramicComponent implements OnInit {

	constructor(public dialog: MatDialog) {}
  ngOnInit() {
  }

  paintingState: string = '*';
  ceramics: Array<String> = myCeramics;

  paintingActive() {
  	this.paintingState = this.paintingState === '*' ? 'void' : '*';
	};

  openDialog(fileName) {
    this.dialog.open(CeramicDialogComponent, {
      height: '95%',
      width: '95%',
      data: { fileName: fileName }
    });     
  }
}
