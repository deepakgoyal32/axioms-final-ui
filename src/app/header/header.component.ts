import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  totalNfts: string = '0';
  totalWallets: string = '0';
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const url = 'http://52.22.129.105:9001/general/live';
    this.http.get<any>(url).subscribe((response: any) => {
      response.forEach(element => {
        if(element.type === "nfts")
          this.totalNfts = (Math.round(Number(element.count)) / 1000000).toFixed(2);
        else if(element.type === "wallets")
          this.totalWallets = (Math.round(Number(element.count)) / 1000000).toFixed(2);
      });
     });
  }

}
