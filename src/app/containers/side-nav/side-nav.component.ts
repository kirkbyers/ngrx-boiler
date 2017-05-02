import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})

export class SideNavComponent implements OnInit {
  navItems = [
    {
      id: 0,
      title: 'Home',
    }, {
      id: 1,
      title: 'Page 1',
      subItems: [
        {
          id: 0,
          title: 'Sub Item 1'
        },
        {
          id: 1,
          title: 'Sub Item 2'
        }
      ]
    }, {
      id: 2,
      title: 'Page 2',
    }
  ];

  constructor() { }

  ngOnInit() { }
}
