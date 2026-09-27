import { Component, Input, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  @Input() dataIs;
  activeValue = {
    title: 'Traditional',
    description: 'Products inspired by Indian traditions and spiritual practices.'
  };

  constructor() {

  }
  ngOnInit() {
    AOS.init();
    this.scrollToTop();
  }

  selectValue(value: { title: string; description: string }) {
    this.activeValue = value;
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }

}
