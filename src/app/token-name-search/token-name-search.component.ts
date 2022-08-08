import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import { debounce } from 'lodash'
import { MatAutocomplete } from '@angular/material/autocomplete';

@Component({
  selector: 'app-token-name-search',
  templateUrl: './token-name-search.component.html',
  styleUrls: ['./token-name-search.component.scss']
})
export class TokenNameSearchComponent implements OnInit {
  @ViewChild(MatAutocomplete) matAutocomplete: MatAutocomplete;
  baseUrl: string = 'http://52.22.129.105:9001';
  selectedValue: any = '0';
  selectedSymbol: string = 'gt';
  next: number = 0;
  previous: number = 0;

  records = [];
  
  displayProgressSpinnerInBlock: boolean = false;

  constructor(private http: HttpClient) { }

  myControl = new FormControl('');
  options: Observable<any>;

  ngOnInit() {
    this.InitialValues('');
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    this.matAutocomplete.options.first.select();
  }

  @Debounce(1000)
  onKeyUp(event: any) {
    const value = event.target.value;
    this.InitialValues(value);
  }

  onScroll(value){
    this.SendRequest(value, this.next);
  }

  InitialValues(value: string){
    this.options = this.getInitialSearchValues(value).pipe(map(item => item.results));
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

function Debounce(ms) {
  return function(target: any, key: any, descriptor: any) {
    const oldFunc = descriptor.value
    const newFunc = debounce(oldFunc, ms)
    descriptor.value = function() {
        return newFunc.apply(this, arguments)
    }
  }
}