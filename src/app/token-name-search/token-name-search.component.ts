import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-token-name-search',
  templateUrl: './token-name-search.component.html',
  styleUrls: ['./token-name-search.component.scss']
})
export class TokenNameSearchComponent implements OnInit {

  baseUrl: string = 'http://52.22.129.105:9001';
  selectedValue: any = '0';
  selectedSymbol: string = 'gt';
  next: number = 0;
  previous: number = 0;

  records = [];
  
  displayProgressSpinnerInBlock: boolean = false;

  constructor(private http: HttpClient) { }

  myControl = new FormControl('');
  options: string[] = [];

  ngOnInit() {
    this.InitialValues('');
  }

  onKeyUp(event: any) {
    const value = event.target.value;
    this.InitialValues(value);
  }

  onScroll(value){
    this.SendRequest(value, this.next);
  }

  InitialValues(value: string){
    this.options = [];
    this.getInitialSearchValues(value).subscribe(response => {
      response.results.forEach(element => {
        this.options.push(element);
      });
      if (response.next && response.next.page && response.next.page !== '' && response.next.page !== 0) {
        this.next = response.next.page;
      }
      if (response.previous && response.previous.page && response.previous.page !== '' && response.previous.page !== 0) {
        this.previous = response.previous.page;
      }
      //this.displayProgressSpinnerInBlock = false;
    });
  }

  SendRequest(value: string, page: number) {
    console.log(value);
    console.log(this.selectedValue);
    if(page <= 1) this.records = [];
    this.next = 0;
    this.previous = 0;
    this.getWalletAddressesForExactNameSearch(value, page).subscribe(response => {
      response.results.forEach(element => {
        this.records.push(element);
      });
      if (response.next && response.next.page && response.next.page !== '' && response.next.page !== 0) {
        this.next = response.next.page;
      }
      if (response.previous && response.previous.page && response.previous.page !== '' && response.previous.page !== 0) {
        this.previous = response.previous.page;
      }
    });
  }

  public getWalletAddressesForExactNameSearch(value: string, page: number): Observable<any> {
    const url = this.baseUrl + '/nfts/name/search?p=' + value + '&limit=50' + (page > 0 ? '&page=' + page : '');
    return this.http.get<any>(url);
  }

  public getInitialSearchValues(value: string): Observable<any> {
    const url = this.baseUrl + '/general/name/search?text=' + value;
    return this.http.get<any>(url);
  }
}
