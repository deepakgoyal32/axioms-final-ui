import { Component, ChangeDetectorRef } from '@angular/core';
import { LoaderService } from './loader.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  mode = 'indeterminate';
  value = 50;
  color = 'primary';

  constructor(public loader: LoaderService) { }

  ngOnInit(){
    this.loader.displayProgressSpinnerInBlock = false;
  }
}

