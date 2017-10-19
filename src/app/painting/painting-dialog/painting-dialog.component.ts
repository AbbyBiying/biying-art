import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-painting-dialog',
  templateUrl: './painting-dialog.component.html',
  styleUrls: ['./painting-dialog.component.scss']
})
export class PaintingDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
 
}
