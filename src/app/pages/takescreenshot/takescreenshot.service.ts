import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TakescreenshotService {
  captures = [];
  resultImageSource:any;
  constructor() {}
}
