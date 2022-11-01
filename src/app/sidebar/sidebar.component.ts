import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../loader.service';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  mode = 'indeterminate';
  value = 50;
  color = 'primary';

  currentRoute : string;

  constructor(public loader: LoaderService, private router : Router) {
    
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
          // Show progress spinner or progress bar
          console.log('Route change detected');
      }

      if (event instanceof NavigationEnd) {
        // Hide progress spinner or progress bar
        this.currentRoute = event.url;  
                
        if(this.currentRoute.includes('nft')){
          this.setNftSymbol(this.currentRoute.substring(this.currentRoute.length-2, this.currentRoute.length));
        } else {
          this.setSymbol(this.currentRoute.substring(1, this.currentRoute.length) || 'gt');
        }
      }

      if (event instanceof NavigationError) {
           // Hide progress spinner or progress bar

          // Present error to user
          console.log(event.error);
      }
  });
  }

  ngOnInit(): void {
  }

  setSymbol(value:string) {
    
    localStorage.clear();
    localStorage.setItem('symbol', value);
    if(value === 'gt')
      this.loader.title = "more than";
    else if(value === 'lt')
      this.loader.title = "less than";
    else
      this.loader.title = "exactly";
  }

  setRange(value: boolean) {
    localStorage.clear();
    localStorage.setItem('isRangeSlider', value.toString());
  }

  setNftSymbol(value:string) {
    localStorage.clear();
    localStorage.setItem('nftSymbol', value);
    if(value === 'gt')
      this.loader.title = "more than";
    else if(value === 'lt')
      this.loader.title = "fewer than";
    else
      this.loader.title = "exactly";
  }
}
