import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-design-dialog',
  templateUrl: './design-dialog.component.html',
  styleUrls: ['./design-dialog.component.scss']
})

export class DesignDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
 
}
