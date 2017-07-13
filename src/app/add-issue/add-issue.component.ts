import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Issue } from '../issue';
import { IssueService } from '../issue-service';

@Component({
  selector: 'add-issue',
  templateUrl: './add-issue.component.html',
  styleUrls: ['./add-issue.component.css'],
  providers: [IssueService]
})
export class AddIssueComponent {
  @Output() onIssueAdded = new EventEmitter<boolean>();
  issues: Issue[];
  newIssue: Issue;
  error: string;

  constructor(private issueService: IssueService){
    this.newIssue = new Issue();
  }

  addIssue() {
    this.issueService.create(this.newIssue.name, this.newIssue.description).subscribe( issue => {}, error => this.error = <any>error );
    this.onIssueAdded.emit(true);
  }
}
