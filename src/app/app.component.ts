import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'angular-app';
  name = "Sabuz";
  country = "Bangladesh";
  // parent to child = propertyBinding
  //child to parent = customEventbinding


  onReceive(value){
    console.log(value);
  }
}
