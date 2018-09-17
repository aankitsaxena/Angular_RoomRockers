import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MemberListComponent } from './member/member_list.component';
import { Home } from './home/home.component';
import { MemberDesc } from './member/member_Desc';
import { TaskListComponent } from './task/task_List.component';

@NgModule({
  declarations: [
    AppComponent,
    MemberListComponent,
    Home,
    MemberDesc,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'home', component: Home },
      { path: 'memberList', component: MemberListComponent },
      { path: 'addMember', component: MemberDesc },
      { path: 'taskList', component: TaskListComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
