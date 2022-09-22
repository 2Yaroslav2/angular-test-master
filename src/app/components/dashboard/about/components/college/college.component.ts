import {Component, Inject, OnInit} from '@angular/core';
import {COLLEGE_ABOUT$} from '../../about.providers';
import {Observable} from 'rxjs';
import {AboutInterface} from "../../../../../models/about.interface";
import {CollegePostService} from "../../../../../services/about/collage/college-post.service";


@Component({
    selector: 'app-college',
    templateUrl: './college.component.html',
    styleUrls: ['./college.component.scss']
})
export class CollegeComponent implements OnInit {
    college?: AboutInterface;

    constructor(
        private collegeServicePost: CollegePostService,
        @Inject(COLLEGE_ABOUT$) readonly college$: Observable<AboutInterface>
    ) {
    }

    ngOnInit() {
        this.getCollege();
    }

    getCollege(): void {
        this.collegeServicePost.getCollege().subscribe((response) => {
            this.college = response;
        });
    }
}
