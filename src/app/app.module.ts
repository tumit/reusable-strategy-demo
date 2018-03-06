import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MembersComponent } from './members/members.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { RouteReuseStrategy } from '@angular/router';
import { ReusableRouteStrategy } from './reusable-route-strategy';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, MembersComponent, MemberDetailComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: ReusableRouteStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule {}
