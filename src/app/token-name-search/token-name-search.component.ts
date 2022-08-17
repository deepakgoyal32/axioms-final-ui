import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import { debounce } from 'lodash'
import { MatAutocomplete } from '@angular/material/autocomplete';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-token-name-search',
  templateUrl: './token-name-search.component.html',
  styleUrls: ['./token-name-search.component.scss']
})
export class TokenNameSearchComponent implements OnInit {
  @ViewChild(MatAutocomplete) matAutocomplete: MatAutocomplete;
  baseUrl: string = 'http://52.22.129.105:9001';
  selectedValue: string = '';
  selectedSymbol: string = 'gt';
  selectedOptionValue: string;
  selectedContractAddress: string;
  next: number = 0;
  previous: number = 0;

  records = [];

  constructor(private http: HttpClient, private loader: LoaderService) { }

  myControl = new FormControl('');
  options: Observable<any>;

  ngOnInit() {
    this.InitialValues('Cryptopunks');
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (this.selectedValue === '') { } else {
      this.matAutocomplete.options?.first?.select();
    }
  }

  @Debounce(500)
  onKeyUp(event: any) {
    this.selectedValue = event.target.value;
    this.InitialValues(this.selectedValue);
  }

  onScroll(value){
    this.SendRequest(value, this.next);
  }

  InitialValues(value: string){
    this.options = this.getInitialSearchValues(value).pipe(map(item => item.results));
  }

  displayFn(option?: any): string | undefined {
    return option ? option.name : undefined;
  }

  changeSelectedOption(event: any) {
    this.selectedContractAddress = event.option.value.contract_address;
    this.selectedOptionValue = event.option.value.token_id;
  }

  SendRequest(value: string, page: number) {
    this.loader.displayProgressSpinnerInBlock = true;
    if(page <= 1) this.records = [];
    this.next = 0;
    this.previous = 0;
    
    this.getWalletAddressesForExactNameSearch(this.selectedContractAddress, this.selectedOptionValue, page).subscribe(response => {
      response.results.forEach(element => {
        this.records.push(element);
      });
      if (response.next && response.next.page && response.next.page !== '' && response.next.page !== 0) {
        this.next = response.next.page;
      }
      if (response.previous && response.previous.page && response.previous.page !== '' && response.previous.page !== 0) {
        this.previous = response.previous.page;
      }
      this.loader.displayProgressSpinnerInBlock = false;
    });
  }

  public getWalletAddressesForExactNameSearch(contract_address: string, token_id: string, page: number): Observable<any> {
    const url = this.baseUrl + '/nfts/name/search?contract_address=' + contract_address + '&token_id=' + token_id + '&limit=50' + (page > 0 ? '&page=' + page : '');
    console.log(url);
    return this.http.get<any>(url);
  }

  public getInitialSearchValues(value: string): Observable<any> {
    const url = this.baseUrl + '/general/token/search?text=' + value;
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