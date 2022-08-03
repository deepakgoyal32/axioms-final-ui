import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

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
