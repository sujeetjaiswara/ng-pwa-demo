import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CCComponent } from '../cc/cc.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(public dialog: MatDialog) { }

  attribution(e: Event) {
    this.dialog.open(CCComponent, {
      autoFocus: false
    });
  }
}
