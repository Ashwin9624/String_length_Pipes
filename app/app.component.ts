import { Component, ChangeDetectorRef } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  term: string = "";

  constructor() {}

  ngOnInit() {}
}
