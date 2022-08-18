import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatInputModule } from '@angular/material/input';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-balance-range-content',
  templateUrl: './balance-range-content.component.html',
  styleUrls: ['./balance-range-content.component.scss']
})
export class BalanceRangeContentComponent implements OnInit {
  @ViewChild('minInput', {static: true}) minInputElement: ElementRef;
  @ViewChild('maxInput', {static: true}) maxInputElement: ElementRef;
  baseUrl: string = 'http://52.22.129.105:9001'; //'http://107.22.58.206:9000';
  next: number = 0;
  previous: number = 0;

  minValue: number = 2;
  maxValue: number = 8;
  options: Options = {
    floor: 0,
    ceil: 100000,
  };

  records = [];

  constructor(private http: HttpClient, private loader: LoaderService, minInputElement: ElementRef, maxInputElement: ElementRef) {
    this.minInputElement = minInputElement;
    this.maxInputElement = maxInputElement;
  }

  ngOnInit(): void {  }

  onScroll(){
    this.SendRequest(this.next);
  }

  // changeMinValue(event) {
  //   const val = this.minValue;
  //   if(Number(event.target.value) < this.maxValue) {
  //     this.minValue = Number(event.target.value);
  //   } else {
  //     //event.target.value = '';
  //     this.minValue = this.maxValue;
  //     this.maxValue = event.target.value;
  //     event.preventDefault(); 
  //     event.stopPropagation();
  //     return false;
  //   }
  // }

  // changeMaxValue(event) {
  //   const val = this.minValue; 
  //   if(Number(event.target.value) > this.minValue) {
  //     this.maxValue = Number(event.target.value);
  //   } else {
  //     //event.target.value = '';
  //     this.maxValue = val;
  //     this.minValue = event.target.value;
  //     event.preventDefault();
  //     event.stopPropagation();
  //     return false;
  //   }
  // }

  SendRequest(page: number) {
    this.next = 0;
    this.previous = 0;
    if(page <= 1)
      this.records = [];
    
    if (Number(this.minInputElement.nativeElement.value) <= Number(this.maxInputElement.nativeElement.value)) {
      this.loader.displayProgressSpinnerInBlock = true;
      this.minValue = Number(this.minInputElement.nativeElement.value);
      this.maxValue = Number(this.maxInputElement.nativeElement.value);
      console.log(this.minValue);
      console.log(this.maxValue);
      let symbol = localStorage.getItem('symbol');
      this.getWalletAddressesForXPriceRange(this.minValue, this.maxValue, page).subscribe(response => {
        this.records = response.results;
        if (response.next && response.next.page && response.next.page !== '' && response.next.page !== 0) {
          this.next = response.next.page;
        }
        if (response.previous && response.previous.page && response.previous.page !== '' && response.previous.page !== 0) {
          this.previous = response.previous.page;
        }
        this.loader.displayProgressSpinnerInBlock = false;
      });
    }
    else {
      alert('minimum value should be lesser than maximum value');
      return false;
    }
  }

  public getWalletAddressesForXPriceRange(
    value: number,
    maxValue: number,
    page: number
  ): Observable<any> {
    const url =
      this.baseUrl +
      "/wallet/address?gte=" +
      value +
      "&lte=" +
      maxValue +
      "&limit=50" +
      (page > 0 ? "&page=" + page : "");
    console.log(url);
    return this.http.get<any>(url);
  }

}
