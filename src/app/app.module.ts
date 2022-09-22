import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from "@ngx-translate/core";
import {translationConfig} from "./share/config/translation-config";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {NotFoundModule} from "./components/not-found/not-found.module";
import {LayoutsModule} from "./components/layouts/layouts.module";
import {DashboardModule} from "./components/dashboard/dashboard.module";
import {PreloaderInterceptor} from "./interceptors/preloader.interceptor";
import { PreloaderComponent } from './components/preloader/preloader.component';
import {MaterialModule} from "./modules/material/material.module";

@NgModule({
    declarations: [
        AppComponent,
        PreloaderComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        NoopAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        NotFoundModule,
        HttpClientModule,
        TranslateModule.forRoot(translationConfig),
        LayoutsModule,
        DashboardModule,
        MaterialModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: PreloaderInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
