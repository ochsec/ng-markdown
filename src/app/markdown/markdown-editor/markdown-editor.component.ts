import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-markdown-editor',
  templateUrl: './markdown-editor.component.html',
  styleUrls: ['./markdown-editor.component.css']
})
export class MarkdownEditorComponent implements OnInit {

  markdown: string = `
  # Steps
  * Create editor component with primeng textarea widget
  * Create pipe to return generated markdown
  * Deploy to [Github](https://github.com)
  * Deploy to [Zeit Now](https://zeit.co/now)`;

  constructor() { }

  ngOnInit() {
  }

}
