import { TestBed } from '@angular/core/testing';
import 'zone.js';

import { Cache } from './cache';

fdescribe('Cache', () => {
  let service: Cache;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Cache],
    });
    service = TestBed.inject(Cache);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should cache data', () => {
    const data = { id: 1, userName: 'Alex' };
    service.set(data, 'url', 'params', 'body');

    const result = service.get('url', 'params', 'body')
    expect(result).not.toBe(null);

    if (result) {
      result.subscribe(res => expect(res).toBe(data));
    }

  });
});
