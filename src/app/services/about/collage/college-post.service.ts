import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map} from "rxjs/operators";
import {Observable, throwError} from "rxjs";
import {AboutInterface} from "../../../models/about.interface";


@Injectable({
    providedIn: 'root'
})
export class CollegePostService {

    constructor(private httpClient: HttpClient) {
    }

    getCollege(): Observable<AboutInterface> {
        const url = '../../../../assets/some-data/college.json';
        return this.httpClient.get(url).pipe(
            map((response: any) => {
                return response.college;
            }),
            catchError(err => {
                console.log('Get college: ', err);
                return throwError(err);
            }));
    }
}
