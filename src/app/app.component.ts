import { Component } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "ang-app";
  product: any[];

  constructor(db: AngularFireDatabase) {
    db.list("/Product").snapshotChanges();
  }
}
