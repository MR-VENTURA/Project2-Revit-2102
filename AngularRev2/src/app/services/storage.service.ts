import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Injectable({
    providedIn: 'root'
})export class LocalStorage {
  constructor() { }
  public setItem(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public getItem(key: string){
    return localStorage.getItem(key)
  }  public removeItem(key:string) {
    localStorage.removeItem(key);
  }  public clear(){
    localStorage.clear();
  }}
