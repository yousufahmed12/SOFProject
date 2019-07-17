import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  clicked = false;
  title = "This is the Click Source where It manage Both employer and Candidate";
  handleClick(){
    this.clicked = true;
  }

  
  constructor() { }

  ngOnInit() {
  }

}
