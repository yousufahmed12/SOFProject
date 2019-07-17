// <<<<<<< HEAD
import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { StackOverflowService } from '../stack-overflow.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  input;
  output: any;

  constructor(private service: StackOverflowService) {
    // service.getData().subscribe(x=>{
    //   console.log(x);
    //   this.output = x.items[0].account_id;
    // });
    // "https://api.stackexchange.com/2.2/users?order=desc&sort=reputation&inname=Emmanuel&site=stackoverflow"
   // service.getBadgesData();
  //  service.getAnswersData();
  //  service.getBadgesData();
  //  service.getCommentsData();
  
   }
// =======
// import { Component, OnInit } from '@angular/core';
// import { StackOverflowService } from '../stack-overflow.service';

// @Component({
//   selector: 'app-output',
//   templateUrl: './output.component.html',
//   styleUrls: ['./output.component.css']
// })
// export class OutputComponent implements OnInit {

//   constructor(private service: StackOverflowService) {
//     service.getData().subscribe(x=>{
//       console.log(x);
//     });
//    }
// >>>>>>> 70edd0fc59a30aa9e5791c1688a29835c726be4d

//   ngOnInit() {
//   }

  save() {
    this.service.save(this.input).subscribe(response => {
      console.log(response);
    });
  }

  getCandidate() {
    this.service.getCandidateData(this.input).subscribe(response=>{
      console.log(response);
    });
  }

  updateCandidate() {
    this.service.getCommentData(this.input);
    // this.service.update(this.input).subscribe(response=>{
    //   console.log(response);
    // });
  }

// }
}
