import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zag-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  @Input() title: string = '...'

  constructor() { }

  ngOnInit() {
  }

}
