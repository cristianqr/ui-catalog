import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'ndl-panel',
    templateUrl: './panel.component.html',
    styleUrls: ['./panel.component.scss'],
})
export class PanelComponent implements OnInit {
    @Input() header: string;
    constructor() {}

    ngOnInit() {}
}
