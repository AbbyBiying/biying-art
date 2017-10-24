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

import { MatDialog } from '@angular/material';

import { artAnimations } from '../animations/art-animations';
import { DesignDialogComponent } from './design-dialog/design-dialog.component';
import { myDesigns } from './designs';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss'],
  animations: artAnimations
})
export class DesignComponent implements OnInit {

  constructor(public dialog: MatDialog) {}
  ngOnInit() {
  }
    
  artworkState: string = '*';
  statementState: string = '*'
  designs: Array<String> = myDesigns;

  artworkActive() {
    this.artworkState = this.artworkState === '*' ? 'void' : '*';
  };

  statementActive() {
    this.statementState = this.statementState === '*' ? 'void' : '*';
  };

  openDialog(fileName) {
    this.dialog.open(DesignDialogComponent, {
      height: '95%',
      width: '95%',
      data: { fileName: fileName }
    });     
  }
}
