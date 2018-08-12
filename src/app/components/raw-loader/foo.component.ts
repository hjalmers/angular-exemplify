import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css']
})
export class FooComponent implements OnInit {

  title = 'Foo bar';

  constructor() { }

  ngOnInit() {
  }

}
