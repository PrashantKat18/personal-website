import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  @Input() dataIs;
  
  constructor() {
    
   }
  ngOnInit() {
    console.log("aaaaaaaaaaaaaaa");

  }

}
