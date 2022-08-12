import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-by-nft-count-content',
  templateUrl: './by-nft-count-content.component.html',
  styleUrls: ['./by-nft-count-content.component.scss']
})
export class ByNftCountContentComponent implements OnInit {

  baseUrl: string = 'http://107.22.58.206:9000';
  selectedSymbol: string = 'gt';
  next: number = 0;
  previous: number = 0;

  records = [];

  constructor(private http: HttpClient, public dialog: MatDialog, private loader: LoaderService) { }

  ngOnInit(): void { }

  openDialog(address: string) {
    this.dialog.open(DialogComponent, {
      data: {
        address: address
      },
      height: '800',
      width: '800'
    });
  }

  onScroll(value){
    this.SendRequest(value, this.next);
  }

  SendRequest(value: string, page: number) {
    this.next = 0;
    this.previous = 0;
    this.loader.displayProgressSpinnerInBlock = true;
    let nftSymbol = localStorage.getItem('nftSymbol');
    if(page <= 1)
      this.records = [];
    
    this.getWalletAddressesForXNFTCount(value, page, nftSymbol).subscribe(response => {
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

  public getWalletAddressesForXNFTCount(value: string, page: number, nftSymbol: string): Observable<any> {
    const url = this.baseUrl + '/nfts/address?count=' + value + '&symbol=' + nftSymbol + '&limit=50' + (page > 0 ? '&page=' + page : '');
    console.log(url);
    return this.http.get<any>(url);
  }
}
