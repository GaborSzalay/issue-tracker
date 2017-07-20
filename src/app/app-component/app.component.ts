import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  reloadIssues = 0;

  onIssueAdded(addedIssueId) {
    this.reloadIssues = addedIssueId;
  }
}
