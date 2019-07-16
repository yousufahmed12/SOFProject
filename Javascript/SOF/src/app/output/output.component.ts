import { Component, OnInit } from '@angular/core';
import { StackOverflowService } from '../stack-overflow.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  constructor(private service: StackOverflowService) {
    service.getData().subscribe(x=>{
      console.log(x);
    });
   }

  ngOnInit() {
  }

  

}
