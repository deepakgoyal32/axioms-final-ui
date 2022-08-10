import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  displayProgressSpinnerInBlock: boolean = false;
  constructor() { }
}
