import { Component } from '@angular/core';
import { Issue } from '../issue';
import { IssueService } from '../issue-service';


@Component({
  selector: 'issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css'],
  providers: [IssueService]
})
export class IssueListComponent {
  issues: Issue[];
  error: string;
  
  constructor(private issueService: IssueService){
    
    issueService.getIssues().subscribe( issues => {this.issues = issues}, error => this.error = <any>error );
  }
}
