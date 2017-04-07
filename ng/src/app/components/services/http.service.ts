import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";

import {Observable} from "rxjs";

@Injectable()
export class HttpService {

    private headers: Headers = new Headers({'Content-Type': 'application/json'});
    // could have a parameter
    // could have a query parameter
    // could have none of those
    post(urlPieces: string[], body, headers?): Observable<any> {
        const url = this.parseUrl(urlPieces);
        return this.http.post(url, body, headers || this.headers)
            .map(res => res.json());
    }


    private parseUrl(urlPieces: any): string {
        let url = '';
        urlPieces.forEach(piece => {
            url += piece;
        });
        return url;
    }

    constructor(private http: Http) { }

}
