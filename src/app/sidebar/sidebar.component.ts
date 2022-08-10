import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../loader.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

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
  }

  setRange(value: boolean) {
    localStorage.clear();
    localStorage.setItem('isRangeSlider', value.toString());
  }

  setNftSymbol(value:string) {
    localStorage.clear();
    localStorage.setItem('nftSymbol', value);
  }
}
