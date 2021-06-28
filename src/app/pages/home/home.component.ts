import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MessageComponent } from '../../components/message/message.component';
import { AddProvider } from '../../../../src/app/services/add';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  panelOpenState = false;
  panelOpenState1 = false;
  constructor(public addProvider :AddProvider,public dialog: MatDialog) { }
  ngOnInit() {
   
  }

 



}
