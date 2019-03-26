import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as marked from 'marked';

@Pipe({
    name: 'markdownOutput'
})
export class markdownOutputPipe implements PipeTransform {
    constructor(private _sanitizer: DomSanitizer) { }

    transform(value: string): SafeHtml {
        return this._sanitizer.bypassSecurityTrustHtml(marked(value));
    }
} 
