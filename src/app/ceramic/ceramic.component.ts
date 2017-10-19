import { Component, OnInit } from '@angular/core';
import { myCeramics } from './ceramics';

@Component({
  selector: 'app-ceramic',
  templateUrl: './ceramic.component.html',
  styleUrls: ['./ceramic.component.scss']
})
export class CeramicComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  ceramics: Array<String> = myCeramics;
}
