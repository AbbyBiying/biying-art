import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";

import { artAnimations } from "../../animations/art-animations";
import { PaintingDialogComponent } from "./painting-dialog/painting-dialog.component";
import { myPaintings } from "./paintings";

@Component({
  selector: "app-painting",
  templateUrl: "./painting.component.html",
  styleUrls: ["./painting.component.scss"],
  animations: artAnimations
})
export class PaintingComponent implements OnInit {
  constructor(public dialog: MatDialog) {}
  ngOnInit() {}

  paintings: Array<String> = myPaintings;

  openDialog(fileName) {
    this.dialog.open(PaintingDialogComponent, {
      height: "95%",
      width: "95%",
      data: { fileName: fileName }
    });
  }
}
