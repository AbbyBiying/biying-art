import { Component, ElementRef, ViewChild, OnInit } from "@angular/core";

@Component({
  selector: "app-art",
  templateUrl: "./art.component.html",
  styleUrls: ["./art.component.scss"]
})
export class ArtComponent implements OnInit {
  @ViewChild("artType", { static: true }) artType: ElementRef;

  constructor() {}
  color: string;

  ngOnInit(): void {}
}
