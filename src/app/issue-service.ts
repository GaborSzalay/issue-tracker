import { Injectable, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Issue } from './issue';
import { ErrorHandler } from './error-handler';

@Injectable()
export class IssueService implements OnInit {
  private issuesFetchUrl = 'api/issues';
  private issueFetchUrl = 'api/issue';
  private issueAddUrl = 'api/add';
  private issueEditUrl = 'api/edit';
  
  constructor(private http: Http, private errorHandler: ErrorHandler) { }
  
  ngOnInit(): void {
    this.getMainIssues();
  }
  
  getMainIssues(): Observable<Issue[]> {
    return this.http.get(this.issuesFetchUrl)
    .map(this.extractData)
    .catch(this.errorHandler.handleError);
  }
  
  getIssue(id: number): Observable<Issue> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    
    return this.http.post(this.issueFetchUrl, { id }, options)
    .map(this.extractData)
    .catch(this.errorHandler.handleError);
  }
  
  create(name: string, description: string): Observable<Issue> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    
    return this.http.post(this.issueAddUrl, { name, description }, options)
    .map(this.extractData)
    .catch(this.errorHandler.handleError);
  }
  
  edit(issue: Issue): Observable<Issue> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    
    return this.http.post(this.issueEditUrl, { id: issue.id, name: issue.name, description: issue.description }, options)
    .map(this.extractData)
    .catch(this.errorHandler.handleError);
  }
  
  private extractData(res: Response) {
    const body = res.json();
    return body || {};
  }
}