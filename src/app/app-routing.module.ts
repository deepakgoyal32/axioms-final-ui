import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BalanceRangeContentComponent } from './balance-range-content/balance-range-content.component';
import { ByNftCountContentComponent } from './by-nft-count-content/by-nft-count-content.component';
import { CollectionNameSearchComponent } from './collection-name-search/collection-name-search.component';
import { ContentComponent } from './content/content.component';
import { RangeContentComponent } from './range-content/range-content.component';
import { TokenNameSearchComponent } from './token-name-search/token-name-search.component';

const routes: Routes = [
  { path: 'name-search', component: TokenNameSearchComponent },
  { path: '', redirectTo: 'gt', pathMatch: 'full' },
  { path: 'gt', component: ContentComponent },
  { path: 'lt', component: ContentComponent },
  { path: 'eq', component: ContentComponent },
  { path: 'nft-gt', component: ByNftCountContentComponent },
  { path: 'nft-lt', component: ByNftCountContentComponent },
  { path: 'nft-eq', component: ByNftCountContentComponent },
  { path: 'range', component: RangeContentComponent },
  { path: 'collection-search', component: CollectionNameSearchComponent },
  { path: 'bal-range', component: BalanceRangeContentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
