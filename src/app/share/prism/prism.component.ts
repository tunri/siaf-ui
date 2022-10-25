import { Component, ElementRef, Input, AfterViewInit } from '@angular/core';
import * as Prism from 'prismjs';
@Component({
    selector: 'prism, [prism]',
    template: '<ng-content></ng-content>'
})
export class PrismComponent implements AfterViewInit {
    @Input() code: string;
    constructor(private el: ElementRef) { }

    ngAfterViewInit() {
        const code = (this.code || this.el.nativeElement.innerText)
        const html = Prism.highlight(code, Prism.languages.javascript, 'javascript');
        this.el.nativeElement.innerHTML = html;
    }

}
