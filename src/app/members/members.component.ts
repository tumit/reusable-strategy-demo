import { Component, OnInit } from '@angular/core';
import { Member } from '../member';
import { Router } from '@angular/router';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  members: Member[];

  constructor(private router: Router) {}

  ngOnInit() {
    console.log('onInit');

    this.members = [
      {
        id: 1,
        name: 'Cherprang',
        avatar:
          'https://instagram.fsin2-1.fna.fbcdn.net/vp/532a4ee612ea9bd5132d2b5ef9dbd3d3/5B392EA7/t51.2885-15/s640x640/sh0.08/e35/28156471_2030247967188631_4057791887585574912_n.jpg'
      } as Member,
      {
        id: 2,
        name: 'Pun',
        avatar:
          'https://instagram.fsin2-1.fna.fbcdn.net/vp/b70265fdd234e70f62bc0d0d659d11c3/5B1C5080/t51.2885-15/s640x640/sh0.08/e35/c180.0.719.719/27893191_164639367515513_3154757283976577024_n.jpg'
      } as Member,
      {
        id: 3,
        name: 'Jennis',
        avatar:
          'https://instagram.fsin2-1.fna.fbcdn.net/vp/fb4ee379c1592a5154cd5f78b62b487e/5B1DBC54/t51.2885-15/s640x640/sh0.08/e35/c180.0.719.719/28150770_547692215597209_5879946086629507072_n.jpg'
      } as Member
    ];
  }

  allChecked(): boolean {
    return this.members.every(m => m.selected);
  }

  toggleSelectAll(selected: boolean) {
    this.members.forEach(m => (m.selected = selected));
  }

  onNext() {
    const selected = this.members.filter(m => m.selected);
    sessionStorage.setItem('selected', JSON.stringify(selected));
    this.router.navigate(['/member-detail']);
  }
}
