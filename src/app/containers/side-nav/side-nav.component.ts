import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as selectors from '../../reducers';
import { MenuItem } from '../../models';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})

export class SideNavComponent implements OnInit {
  navItems$: Observable<MenuItem[]>;

  constructor(
    private _store$: Store<selectors.State>
  ) { }

  ngOnInit() {
    this.navItems$ = this._store$.select(selectors.getNavigationItems);
  }
}
