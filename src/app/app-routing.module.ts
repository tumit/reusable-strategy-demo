import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MembersComponent } from './members/members.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';

const routes: Routes = [
  { path: 'members', component: MembersComponent, data: { reusable: true } },
  { path: 'member-detail', component: MemberDetailComponent, data: { reusable: true } },
  { path: '', redirectTo: 'members', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
