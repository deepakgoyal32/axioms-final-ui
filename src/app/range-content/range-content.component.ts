import { Component, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-range-content',
  templateUrl: './range-content.component.html',
  styleUrls: ['./range-content.component.scss']
})
export class RangeContentComponent implements OnInit {

  baseUrl: string = 'http://52.22.129.105:9001'; //'http://107.22.58.206:9000';
  next: number = 0;
  previous: number = 0;

  minValue: number = 2;
  maxValue: number = 8;
  options: Options = {
    floor: 0,
    ceil: 10,
  };

  records = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {  }

  onScroll(){
    this.SendRequest(this.next);
  }

  SendRequest(page: number) {
    this.next = 0;
    this.previous = 0;
    if(page <= 1)
      this.records = [];
    
    let symbol = localStorage.getItem('symbol');
    this.getWalletAddressesForPriceRange(this.minValue, this.maxValue, page).subscribe(response => {
      this.records = response;
      if (response.next && response.next.page && response.next.page !== '' && response.next.page !== 0) {
        this.next = response.next.page;
      }
      if (response.previous && response.previous.page && response.previous.page !== '' && response.previous.page !== 0) {
        this.previous = response.previous.page;
      }
    });
  }

  public getWalletAddressesForPriceRange(min: number, max: number, page: number): Observable<any> {
    const url = this.baseUrl + '/nfts/price?gte=' + min + '&lte=' + max + '&limit=50' + (page > 0 ? '&page=' + page : '');
    return this.http.get<any>(url);
  }


}
