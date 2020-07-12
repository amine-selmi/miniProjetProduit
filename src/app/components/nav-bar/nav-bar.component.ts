import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Output() actions = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  action(event) {
    this.actions.emit(event);
  }
}
