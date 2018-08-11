import { Injectable } from '@angular/core';
import {of} from 'rxjs/internal/observable/of';
import {Observable} from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class SourceService {

  constructor() { }

  getSource (src): Observable<any> {

    if (src.indexOf('http') !== -1) {
      return Observable.fromPromise(new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              resolve(xhr.response);
            } else {
              reject(xhr.response);
            }
          }
        };
        xhr.open('GET', src);
        xhr.send();
      }));
    } else {
      return of(src);
    }
  }
}
