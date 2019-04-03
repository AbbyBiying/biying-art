import { Component, OnInit } from '@angular/core';
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
  ngOnInit() {}
    
  designs: Array<String> = myDesigns;

  openDialog(fileName) {
    this.dialog.open(DesignDialogComponent, {
      height: '95%',
      width: '95%',
      data: { fileName: fileName }
    });     
  }
}
