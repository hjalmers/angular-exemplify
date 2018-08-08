import { Injectable } from '@angular/core';
import {Response} from '@angular/http';
import {Observable} from "rxjs";
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class SourceService {

  constructor() { }

  getSource (src): Observable<any> {

    return Observable.fromPromise(new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(xhr.response)
          } else {
            reject(xhr.response)
          }
        }
      };
      xhr.open("GET",src);
      xhr.send();
    }));
  }
}
