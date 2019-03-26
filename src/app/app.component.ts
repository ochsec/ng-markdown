import { Component, ElementRef, ViewChild, } from '@angular/core';

declare const marked: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-markdown';
}
