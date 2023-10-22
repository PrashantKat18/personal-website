import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { MessageComponent } from '../../../../src/app/components/message/message.component';
import { AddProvider } from '../../../../src/app/services/add';
import * as AOS from 'aos';
@Component({
  selector: 'app-other-info',
  templateUrl: './other-info.component.html',
  styleUrls: ['./other-info.component.scss']
})
export class OtherInfoComponent implements OnInit {
  showScroll: boolean;
  showScrollHeight = 300;
  hideScrollHeight = 10;
  constructor(public addProvider: AddProvider,public dialog: MatDialog,private router: Router,) { }

  ngOnInit() {
    AOS.init();
    this.scrollToTop();
  }

  getpermission() {
    if (this.addProvider.isUserLoggedIn == true) {
    } else {
      this.openDialog();
      this.router.navigate(['/home']);
    }
  }

  openDialog() {
    this.dialog.open(MessageComponent);
  }


  @HostListener('window:scroll', [])
  onWindowScroll() 
  {
    if (( window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) > this.showScrollHeight) 
    {
        this.showScroll = true;
    } 
    else if ( this.showScroll && (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) < this.hideScrollHeight) 
    { 
      this.showScroll = false; 
    }
  }

  scrollToTop() 
    { 
      (function smoothscroll() 
      { var currentScroll = document.documentElement.scrollTop || document.body.scrollTop; 
        if (currentScroll > 0) 
        {
          window.requestAnimationFrame(smoothscroll);
          window.scrollTo(0, currentScroll - (currentScroll / 5));
        }
      })();
  }

  

}
