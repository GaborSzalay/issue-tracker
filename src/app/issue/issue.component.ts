import { Component, Input } from '@angular/core';
import { Issue } from '../issue';

@Component({
  selector: 'issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent {
  @Input() issue: Issue;
  editMode: boolean;

  constructor() {
    this.editMode = false;
  }

  editIssue(event) {
    event.preventDefault();

    this.editMode = true;
  }

  closeEditMode(event) {
    event.preventDefault();

    this.editMode = false;
  }
}
