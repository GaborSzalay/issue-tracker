import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Issue } from '../issue';
import { IssueOutput } from '../issue-output';
import { IssueService } from '../issue-service';

@Component({
  selector: 'issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css'],
  providers: [IssueService]
})
export class IssueComponent implements OnInit {
  @Input() issue: Issue;
  @Output() issueOutput = new EventEmitter<IssueOutput>();
  child: Issue;
  editMode: boolean;
  error: string;

  constructor(private issueService: IssueService) {
    this.editMode = false;
  }

  ngOnInit(): void {
    if (this.issue.child) {
      this.issueService.getIssue(this.issue.child).subscribe( child  => { this.child = child; }, error => this.error = <any>error);
    }
  }

  editIssue(event) {
    event.preventDefault();

    this.editMode = true;
  }

  modify(event) {
    event.preventDefault();

    this.issueService.edit(this.issue).subscribe(() => { }, error => this.error = <any>error);
    this.editMode = false;
  }

  onIssueAdded(addedIssueId) {
    this.issueOutput.emit(new IssueOutput(addedIssueId));
  }
}
