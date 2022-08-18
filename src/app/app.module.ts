import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatSelectModule } from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { RangeContentComponent } from './range-content/range-content.component';
import {MatSliderModule} from '@angular/material/slider';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { ByNftCountContentComponent } from './by-nft-count-content/by-nft-count-content.component';
import { TokenNameSearchComponent } from './token-name-search/token-name-search.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { CollectionNameSearchComponent } from './collection-name-search/collection-name-search.component';
import { BalanceRangeContentComponent } from './balance-range-content/balance-range-content.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ContentComponent,
    RangeContentComponent,
    ByNftCountContentComponent,
    TokenNameSearchComponent,
    CollectionNameSearchComponent,
    BalanceRangeContentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InfiniteScrollModule,
    MatSelectModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSliderModule,
    NgxSliderModule,
    MatAutocompleteModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent]
})
export class AppModule { }
