import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-side-nav-item',
  templateUrl: './side-nav-item.component.html',
  styleUrls: ['./side-nav-item.component.scss']
})

export class SideNavItemComponent implements OnInit {
  @Input() item: string;
  @Input() subItems?: string[];
  @Input() open?: boolean;

  @Output() toggleSubmenu = new EventEmitter();
  @Output() selectItem = new EventEmitter();

  constructor() { }

  ngOnInit() { }
}
