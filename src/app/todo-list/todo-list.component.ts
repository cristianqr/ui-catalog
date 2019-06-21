import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'ndl-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
})
export class TodoListComponent implements OnInit {
    @Input() public items: any;
    @Output() public voteUp = new EventEmitter<any>();
    @Output() public voteDown = new EventEmitter<any>();
    constructor() {}

    ngOnInit() {}
}
