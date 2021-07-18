import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-pwa-demo';

  images = [
    { url: "https://picsum.photos/id/10/200/300" },
    { url: "https://picsum.photos/id/1002/200/300" },
    { url: "https://picsum.photos/id/1011/200/300" },
    { url: "https://picsum.photos/id/1015/200/300" },
    { url: "https://picsum.photos/id/593/200/300" },
    { url: "https://picsum.photos/id/1039/200/300" },
    { url: "https://picsum.photos/id/163/200/300" },
    { url: "https://picsum.photos/id/168/200/300" },
    { url: "https://picsum.photos/id/360/200/300" },
    { url: "https://picsum.photos/id/376/200/300" },
    { url: "https://picsum.photos/id/400/200/300" },
    { url: "https://picsum.photos/id/401/200/300" },
    { url: "https://picsum.photos/id/428/200/300" },
    { url: "https://picsum.photos/id/431/200/300" },
    { url: "https://picsum.photos/id/525/200/300" },
    { url: "https://picsum.photos/id/63/200/300" },
    { url: "https://picsum.photos/id/631/200/300" },
    { url: "https://picsum.photos/id/696/200/300" },
    { url: "https://picsum.photos/id/701/200/300" },
  ]
}
