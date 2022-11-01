import { Component, HostListener, OnInit, ViewChild, AfterViewInit, AfterContentInit, ChangeDetectorRef} from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { debounce } from 'lodash';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { LoaderService } from '../loader.service';
import { eventNames } from 'process';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-collection-name-search',
  templateUrl: './collection-name-search.component.html',
  styleUrls: ['./collection-name-search.component.scss']
})
export class CollectionNameSearchComponent implements OnInit, AfterContentInit {
  @ViewChild(MatAutocomplete) matAutocomplete: MatAutocomplete;
  baseUrl: string = 'http://52.22.129.105:9001';
  selectedValue: string = '';
  selectedOptionValue: string;
  next: number = 0;
  previous: number = 0;
  isDisabled: boolean = true;
  records = [];
  address : string;
  name : string;

  constructor(
    private http: HttpClient,
    private loader: LoaderService,
    private _activatedRoute: ActivatedRoute,
    private _router:Router
  ) {
      this._activatedRoute.queryParams.subscribe(
        params => {
          this.address = params["address"]
          this.name = params["name"]
          
        })
     }

  myControl = new FormControl('');
  options: Observable<any>;

  ngOnInit() {
    this._router.routeReuseStrategy.shouldReuseRoute = () => false;
    if(this.name){
      this.InitialValues(this.name)
      this.selectedValue = this.name;
      this.selectedOptionValue = this.address;
      
    } else {
      this.InitialValues('');
    }
  }

  ngAfterContentInit() {
    setTimeout(() => {
      
      this.matAutocomplete.options?.first?.select();
      this.myControl.setValue({contract_name : this.name, contract_address : this.address })
      this.SendRequest(this.name, 1)
    }, 1000)
    
    
  }

  @Debounce(500)
  onKeyUp(event: any) {
    this.isDisabled = true;
    const value = event.target.value;
    this.selectedValue = value;
    this.InitialValues(value);
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (this.selectedValue === '') { } else {
      this.matAutocomplete.options?.first?.select();
    }
  }

  onScroll(value){
    this.SendRequest(value, this.next);
  }

  async InitialValues(value: string){
    this.options = this.getInitialSearchValues(value).pipe(map(item => item.results));
  }

  displayFn(option?: any): string | undefined {
    return option ? option.contract_name : undefined;
  }

  changeSelectedOption(event: any) {
    this.isDisabled = false;
    this.selectedOptionValue = event.option.value.contract_address;
  }

  SendRequest(value: string, page: number) {
    this.loader.displayProgressSpinnerInBlock = true;
    if(page <= 1) 
      this.records = [];
    
    this.next = 0;
    this.previous = 0;
    this.getWalletAddressesForExactCollectionSearch(this.selectedOptionValue, page).subscribe(response => {
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

  public getWalletAddressesForExactCollectionSearch(value: string, page: number): Observable<any> {
    const url = this.baseUrl + '/nfts/collection/search?p=' + value + '&limit=50' + (page > 0 ? '&page=' + page : '');
    return this.http.get<any>(url);
  }

  public getInitialSearchValues(value: string): Observable<any> {
    const url = this.baseUrl + '/general/collection/search?text=' + value;
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
