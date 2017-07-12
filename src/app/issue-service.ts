import { Injectable } from '@angular/core';
import { Issue } from './issue';
import { ISSUES } from './mock-issues';

@Injectable()
export class IssueService {
    getIssues(): Issue[] {
        return ISSUES;
    }
}