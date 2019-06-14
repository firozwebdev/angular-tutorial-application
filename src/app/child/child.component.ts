import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent implements OnInit {
  @Input('recevingCountry') country;
  myWorld = 'Earth';
  @Output('sendingData') test = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    this.test.emit(this.myWorld);
   // console.log('hello world');
  }

}
