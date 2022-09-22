import {NgModule} from '@angular/core';
import {FooterComponent} from "./footer/footer.component";
import {HeaderComponent} from "./header/header.component";
import {MainComponent} from "./main/main.component";
import {RouterModule} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    declarations: [
        FooterComponent,
        HeaderComponent,
        MainComponent,
    ],
    imports: [
        RouterModule,
        TranslateModule
    ],
    exports: [],
    providers: []
})
export class LayoutsModule {
}
