import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { IssueComponent } from './issue/issue.component';

const appRoutes: Routes = [
  {
    path: 'edit/:id',
    component: IssueComponent,
    data: { id: 'id' }
  },
  {
    path: 'add',
    component: IssueComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    IssueComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
