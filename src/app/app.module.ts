import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app-component/app.component';
import { IssueListComponent } from './issue-list/issue-list.component';
import { IssueComponent } from './issue/issue.component';

const appRoutes: Routes = [
  {
    path: 'edit/:id',
    component: IssueListComponent,
    data: { id: 'id' }
  },
  {
    path: 'add',
    component: IssueListComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    IssueListComponent,
    IssueComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserModule,
    HttpModule,
    JsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
