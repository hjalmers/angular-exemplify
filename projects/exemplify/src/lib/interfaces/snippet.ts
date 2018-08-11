import {Observable} from 'rxjs/Rx';

export interface Snippet {
  src: string; /* source representing actual code, path to source code i.e. http://foo.bar/style.css or require('!raw-loader!style.css') */
  name: string; /* name that will be used for snippet */
  lang?: string; /* used for highlighting snippet with prism.js */
  code?: Observable<string>;
  isActive?: boolean; /* snippet visibility */
  selector?: string; /* select content within file loaded using http, only applicable for markup i.e. html files */
}
