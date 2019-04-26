import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'ndl-panel',
    templateUrl: './panel.component.html',
    styleUrls: ['./panel.component.scss'],
    encapsulation: ViewEncapsulation.ShadowDom,
})
export class PanelComponent implements OnInit {
    @Input() header: string;
    constructor() {}

    ngOnInit() {}
}
