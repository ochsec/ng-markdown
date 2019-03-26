import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MarkdownEditorComponent } from './markdown/markdown-editor/markdown-editor.component';
import { markdownOutputPipe } from './markdown/markdown.pipe';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    MarkdownEditorComponent,
    markdownOutputPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
