import { Injectable, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Issue } from './issue';
import { ErrorHandler } from './error-handler';

@Injectable()
export class IssueService implements OnInit {
    private issueUrl = 'api/issues';

    constructor(private http: Http, private errorHandler: ErrorHandler) { }

    ngOnInit(): void {
        this.getIssues();
    }

    getIssues(): Observable<Issue[]> {
        return this.http.get(this.issueUrl)
            .map(this.extractData)
            .catch(this.errorHandler.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }
}