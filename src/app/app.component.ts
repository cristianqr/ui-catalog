import { Component } from '@angular/core';

@Component({
    selector: 'ndl-root',
    templateUrl: './app.component.html',
})
export class AppComponent {
    todoList = [{ score: 1, name: 'Angular' }, { score: 21, name: 'Angular' }, { score: 10, name: 'Vue' }];
}
