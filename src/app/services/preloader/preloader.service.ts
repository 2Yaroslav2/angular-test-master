import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreloaderService {

  public static fullLoadingCount: number = 0;

  constructor() { }

  getPreloaderCount() : number {
    console.log('in getPreloaderCount: ', PreloaderService.fullLoadingCount);
    return PreloaderService.fullLoadingCount;
  }

  showPreloader() : void {
    console.log('showPreloader');
    PreloaderService.fullLoadingCount++;
    console.log(PreloaderService.fullLoadingCount);
  }

  hidePreloader() : void {
    console.log('hidePreloader');
    setTimeout(function() {
      PreloaderService.fullLoadingCount--;
    }, 10000);

  }

}
