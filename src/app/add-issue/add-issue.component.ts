import { Component } from '@angular/core';
import { Issue } from '../issue';
import { IssueService } from '../issue-service';

@Component({
  selector: 'add-issue',
  templateUrl: './add-issue.component.html',
  styleUrls: ['./add-issue.component.css'],
  providers: [IssueService]
})
export class AddIssueComponent {
  issues: Issue[];
  newIssue: Issue;
  error: string;

  constructor(private issueService: IssueService){
    issueService.getIssues().subscribe( issues => this.issues = issues, error => this.error = <any>error );
    this.newIssue = new Issue();
  }

  addIssue() {
    this.issues.push({ id: 1, name: this.newIssue.name, description: this.newIssue.description });
  }
}
