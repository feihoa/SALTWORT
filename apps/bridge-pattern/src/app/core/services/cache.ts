import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Cache {

  private cache = new Map<string, any>();

  get(url: string, params: any = {}, body: any = {}): Observable<any> | null {
    const key = this.generateCacheKey(url, params, body);
    return this.cache.has(key) ? of(this.cache.get(key)) : null;
  }

  set(value: any, url: string, params: any = {}, body: any = {}) {
    const key = this.generateCacheKey(url, params, body);
    this.cache.set(key, value);
  }

  private generateCacheKey(url: string, params: any, body: any) {
    return `${url}${JSON.stringify(params)}${JSON.stringify(body)}`;
  }

}
