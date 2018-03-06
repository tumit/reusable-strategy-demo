import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from '../member';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  members: Member[];

  constructor(private router: Router) {}

  ngOnInit() {
    this.members = JSON.parse(sessionStorage.getItem('selected')) as Member[];
  }

  onBack() {
    // this.router.navigate(['/members']);
    this.router.navigate(['/members'], { queryParams: { reusable: true } });
  }
}
