import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
    declarations: [AppComponent, PanelComponent, TodoListComponent],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [],
    entryComponents: [PanelComponent, TodoListComponent],
})
export class AppModule {
    constructor(private injector: Injector) {
        const elements: any[] = [[PanelComponent, 'ndl-panel'], [TodoListComponent, 'ndl-todo-list']];
        for (const [component, name] of elements) {
            const element = createCustomElement(component, { injector });
            customElements.define(name, element);
        }
    }
    ngDoBootstrap() {}
}
