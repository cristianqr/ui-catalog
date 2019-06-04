import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ndl-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
    @Input() public items: any;
    @Output() public voteUp = new EventEmitter<any>();
    @Output() public voteDown = new EventEmitter<any>();
    constructor() {}

    ngOnInit() {}
}
