import { Component, Input } from '@angular/core';
import { Issue } from '../issue';

@Component({
  selector: 'issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent {
  @Input() issue: Issue;
}
