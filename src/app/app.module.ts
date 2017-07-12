import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app-component/app.component';
import { IssueListComponent } from './issue-list/issue-list.component';
import { IssueComponent } from './issue/issue.component';
import { AddIssueComponent } from './add-issue/add-issue.component';
import { ErrorHandler } from './error-handler';

const appRoutes: Routes = [
  {
    path: 'add',
    component: IssueListComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    IssueListComponent,
    IssueComponent,
    AddIssueComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserModule,
    HttpModule,
    JsonpModule,
    FormsModule
  ],
  providers: [ErrorHandler],
  bootstrap: [AppComponent]
})
export class AppModule { }
