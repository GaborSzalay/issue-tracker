import { Component, Input } from '@angular/core';
import { Issue } from '../issue';
import { IssueService } from '../issue-service';

@Component({
  selector: 'issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css'],
  providers: [IssueService]
})
export class IssueComponent {
  @Input() issue: Issue;
  editMode: boolean;
  error: string;

  constructor(private issueService: IssueService) {
    this.editMode = false;
  }

  editIssue(event) {
    event.preventDefault();

    this.editMode = true;
  }

  modify(event) {
    event.preventDefault();

    this.issueService.edit(this.issue).subscribe( () => {}, error => this.error = <any>error );
    this.editMode = false;
  }
}
