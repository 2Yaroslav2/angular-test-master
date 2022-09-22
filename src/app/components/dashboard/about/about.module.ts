import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AboutRoutingModule} from './about-routing.module';
import {CollegeComponent} from './components/college/college.component';
import {COLLEGE_ABOUT$} from "./about.providers";
import {TranslateModule} from "@ngx-translate/core";
import {AboutInterface} from "../../../models/about.interface";
import {MaterialModule} from "../../../modules/material/material.module";

export const aboutConfig: AboutInterface = {
    id: 0,
    name: 'some name',
    photo: 'some photo',
    about: 'some name',
    media_type: 1,
    vimeo_video_id: 1,
}


@NgModule({
    declarations: [
        CollegeComponent
    ],
    imports: [
        CommonModule,
        AboutRoutingModule,
        TranslateModule,
        MaterialModule
    ],
    providers: [
        {provide: COLLEGE_ABOUT$, useValue: aboutConfig}

    ]
})
export class AboutModule {
}
