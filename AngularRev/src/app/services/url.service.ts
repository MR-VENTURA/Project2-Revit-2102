import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  private url: string = 'http://ec2-3-137-191-182.us-east-2.compute.amazonaws.com/revit/';

  constructor() { }

  getUrl(): string {
    return this.url;
  }
}
