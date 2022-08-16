import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  mode = 'indeterminate';
  value = 50;
  color = 'primary';

  constructor(public loader: LoaderService) { }

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
      this.loader.title = "less than";
    else
      this.loader.title = "exactly";
  }
}
