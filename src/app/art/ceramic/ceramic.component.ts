import { Component, OnInit } from "@angular/core";
import { myCeramics } from "./ceramics";
import { MatDialog } from "@angular/material";
import { artAnimations } from "../../animations/art-animations";
import { CeramicDialogComponent } from "./ceramic-dialog/ceramic-dialog.component";

@Component({
  selector: "app-ceramic",
  templateUrl: "./ceramic.component.html",
  styleUrls: ["./ceramic.component.scss"],
  animations: artAnimations
})
export class CeramicComponent implements OnInit {
  constructor(public dialog: MatDialog) {}
  ngOnInit() {}

  ceramics: Array<String> = myCeramics;

  openDialog(fileName) {
    this.dialog.open(CeramicDialogComponent, {
      height: "95%",
      width: "95%",
      data: { fileName: fileName }
    });
  }
}
