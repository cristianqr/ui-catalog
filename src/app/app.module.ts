import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';

@NgModule({
    declarations: [AppComponent, PanelComponent],
    imports: [BrowserModule],
    providers: [],
    entryComponents: [PanelComponent],
})
export class AppModule {
    constructor(private injector: Injector) {}
    ngDoBootstrap() {
        const panelEl = createCustomElement(PanelComponent, { injector: this.injector });
        customElements.define('ndl-panel', panelEl);
    }
}
