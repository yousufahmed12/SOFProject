import { Component, OnInit } from '@angular/core';
import { StackOverflowService } from 'src/app/services/stack-overflow.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 input;
 output: any;
 answers:any = 0;
 comment: any=0;
 badgeList:any[] = [0,0,0];
 ready: boolean = false;
 stackOverflowId: string = "User Info by User Profile Url";

 constructor(private service: StackOverflowService, private _snackBar: MatSnackBar) {
}


 ngOnInit() {
 }

 /** 
  *  Method that first setup the Profile component
  *  and then it save candidate info by ID
 */
 save() {
  let id:string = this.input;
  id = id.replace('https://stackoverflow.com/users/','');
  let a: string[] = id.split('/');
  id = a[0].trim();
   this.service.save(id).subscribe(response => {
     console.log(response);
   });
  this.done("Data been saved","");
 }

 updateCandidate() {
   //this.service.getCommentData(this.input);
   // this.service.update(this.input).subscribe(response=>{
   //   console.log(response);
   // });
 }
/** 
 * Method that first setup the profile component
 * and then it retrieve candidate questions info by ID
*/
 getQuestion()
 {

  let id:string = this.input;
  id = id.replace('https://stackoverflow.com/users/','');
  let a: string[] = id.split('/');
  id = a[0].trim();
  //alert(id);

  this.service.getQeustionID(id);
  this.stackOverflowId  = 'User Stackoverflow ID: ' + id;
 }
/** 
 * Method that first setup the profile component
 * and then it retrieve candidate comments info by ID
*/
 getComment()
 {

  let id:string = this.input;
  id = id.replace('https://stackoverflow.com/users/','');
  let a: string[] = id.split('/');
  id = a[0].trim();
  //alert(id);

  this.service.getCommentData(id);

 }
/** 
 * Method that first setup the profile component
 * and then it retrieve candidate badge info by ID
*/
 getBadge()
 {

  let id:string = this.input;
  id = id.replace('https://stackoverflow.com/users/','');
  let a: string[] = id.split('/');
  id = a[0].trim();
  //alert(id);

  this.service.getBadgesData(id);

 }

 /** 
 * Method that first setup the profile component
 * and then it retrieve candidate badge, comment, questions
 * which later on it make easier to get aLL USER INFO WHEN searching stackover-flow URL
*/
 getAll()
 {
   this.ready = false;
   this.getBadge();
   this. getComment();
   this.getQuestion();
   
   this.service.getAnswer().subscribe(res => {

    this.answers=res.length;
  });

   this.service.getBadges().subscribe(res => {

      this.badgeList=res;
    });

    this.service.getComment().subscribe(res => {

      this.comment=res.length;
    });
    this.ready = true;
 }

 done(message: string, action: string) {
  this._snackBar.open(message, action, {duration: 2000,});
}
 




}
 