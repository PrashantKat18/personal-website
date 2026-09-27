import { Component, OnInit ,HostListener} from '@angular/core';
import { MatDialog } from '@angular/material';
import { MessageComponent } from '../../components/message/message.component';
import { AddProvider } from '../../../../src/app/services/add';
import * as AOS from 'aos';
import { Product } from '../../models/product.model';
import { PRODUCTS, UPCOMING_PRODUCTS } from '../../models/products.data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: Product[] = PRODUCTS;
  upcomingProducts: Product[] = UPCOMING_PRODUCTS;
  panelOpenState = false;
  panelOpenState1 = false;
  showScroll: boolean;
  showScrollHeight = 300;
  hideScrollHeight = 10;
  viewType = 0;
  leftCurly = '{';
  rightCurly = '}';
  constructor(public addProvider :AddProvider,public dialog: MatDialog) { }


  ngOnInit() {
    AOS.init({
      offset:100,
    });
    this.scrollToTop();

    
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
      window.scrollTo(0, 0);
  }
 

  changeView(i) {
    this.viewType = i;
  }

}
