import { Component, Input, OnChanges } from '@angular/core';
import { Issue } from '../issue';
import { IssueOutput } from '../issue-output';
import { IssueService } from '../issue-service';


@Component({
  selector: 'issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css'],
  providers: [IssueService]
})
export class IssueListComponent implements OnChanges {
  @Input() reloadIssues: number
  issues: Issue[];
  error: string;

  constructor(private issueService: IssueService) {}

  ngOnChanges(reloadIssues) {
    this.fetchIssues();
  }

  onIssue(issueOutput: IssueOutput) {
    this.fetchIssues();
  }

  private fetchIssues() {
    this.issueService.getMainIssues().subscribe( issues => {this.issues = issues}, error => this.error = <any>error );
  }
}
