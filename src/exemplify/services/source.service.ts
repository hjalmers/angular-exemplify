import { Injectable } from '@angular/core';
import {Response} from '@angular/http';
import {Observable} from "rxjs";
import 'rxjs/Rx';

@Injectable()
export class ExmplifySourceService {

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
  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }


}
