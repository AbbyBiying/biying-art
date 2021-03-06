import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-ceramic-dialog',
  templateUrl: './ceramic-dialog.component.html',
  styleUrls: ['./ceramic-dialog.component.scss']
})

export class CeramicDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
}