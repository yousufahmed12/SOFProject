import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { StackOverflowService } from '../stack-overflow.service';
import { stringify } from 'querystring';

@Component({
 selector: 'app-output',
 templateUrl: './output.component.html',
 styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
 input;
 output: any;

 constructor(private service: StackOverflowService) {
  }


 ngOnInit() {
 }

 save() {
  let id:string = this.input;
  id = id.replace('https://stackoverflow.com/users/','');
  let a: string[] = id.split('/');
  id = a[0].trim();
   this.service.save(id).subscribe(response => {
     console.log(response);
   });
 }

 getCandidate() {

  let id:string = this.input;
  id = id.replace('https://stackoverflow.com/users/','');
  let a: string[] = id.split('/');
  id = a[0].trim();
   this.service.getCandidateData(id).subscribe(response => {
     console.log(response);
   });
 }

 updateCandidate() {
   //this.service.getCommentData(this.input);
   // this.service.update(this.input).subscribe(response=>{
   //   console.log(response);
   // });
 }

 getQuestion()
 {

  let id:string = this.input;
  id = id.replace('https://stackoverflow.com/users/','');
  let a: string[] = id.split('/');
  id = a[0].trim();
  //alert(id);

  this.service.getQeustionID(id);

 }

 getComment()
 {

  let id:string = this.input;
  id = id.replace('https://stackoverflow.com/users/','');
  let a: string[] = id.split('/');
  id = a[0].trim();
  //alert(id);

  this.service.getCommentData(id);

 }

 getBadge()
 {

  let id:string = this.input;
  id = id.replace('https://stackoverflow.com/users/','');
  let a: string[] = id.split('/');
  id = a[0].trim();
  //alert(id);

  this.service.getBadgesData(id);

 }

}