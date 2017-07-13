import { Component, Input, OnChanges } from '@angular/core';
import { Issue } from '../issue';
import { IssueService } from '../issue-service';


@Component({
  selector: 'issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css'],
  providers: [IssueService]
})
export class IssueListComponent {
  @Input() reloadIssues: number
  issues: Issue[];
  error: string;
  
  constructor(private issueService: IssueService){}

  ngOnChanges(reloadIssues) {
    this.fetchIssues();
  }

  private fetchIssues() {
    this.issueService.getIssues().subscribe( issues => {this.issues = issues}, error => this.error = <any>error );
  }
}
