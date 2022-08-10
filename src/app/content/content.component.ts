import { Component, OnInit } from "@angular/core";
import { MatInputModule } from "@angular/material/input";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { LoaderService } from "../loader.service";

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.scss"],
})
export class ContentComponent implements OnInit {
  baseUrl: string = 'http://52.22.129.105:9001'; //"http://107.22.58.206:9000";
  selectedValue: any = "0";
  selectedSymbol: string = "gt";
  next: number = 0;
  previous: number = 0;

  records = [];

  constructor(private http: HttpClient, private loader: LoaderService) {}

  ngOnInit(): void {}

  onScroll(value) {
    this.SendRequest(value, this.next);
  }

  SendRequest(value: string, page: number) {
    console.log(value);
    console.log(this.selectedValue);
    this.loader.displayProgressSpinnerInBlock = true;
    this.next = 0;
    this.previous = 0;
    if(page <= 1)
      this.records = [];
      
    let symbol = localStorage.getItem("symbol");
    this.getWalletAddressesForXPrice(value, symbol, page).subscribe(
      (response) => {
        response.results.forEach((element) => {
          this.records.push(element);
        });
        if (
          response.next &&
          response.next.page &&
          response.next.page !== "" &&
          response.next.page !== 0
        ) {
          this.next = response.next.page;
        }
        if (
          response.previous &&
          response.previous.page &&
          response.previous.page !== "" &&
          response.previous.page !== 0
        ) {
          this.previous = response.previous.page;
        }
        this.loader.displayProgressSpinnerInBlock = false;
      }
    );
  }

  public getWalletAddressesForXPrice(
    value: string,
    symbol: string,
    page: number
  ): Observable<any> {
    const url =
      this.baseUrl +
      "/wallet/address?price=" +
      value +
      "&symbol=" +
      symbol +
      "&limit=50" +
      (page > 0 ? "&page=" + page : "");
    console.log(url);
    return this.http.get<any>(url);
  }
}
