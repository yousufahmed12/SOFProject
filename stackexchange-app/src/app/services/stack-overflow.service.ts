import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Comments } from '../entity/comment';
import { Answers } from '../entity/answers';

@Injectable({
  providedIn: 'root'
})
export class StackOverflowService {
  badges: Observable<any>;
  badgeArr:any = [];
  badge:Subject<[3]> = new Subject<[3]>();

  answers: Observable<any>;
  answersArr: number[] = [];
  answer:Subject<number[]> = new Subject<number[]>();

  

  comments: Observable<any>;
  commentsArr: number[] = [];
  comment:Subject<number[]> = new Subject<number[]>();

  constructor(private http: HttpClient) { }

  // get badges Already done
  /**
   * 
   * @param id string 
   * This method retrieve the badge data from stackoverflow API
   */
  
  getBadgesData(id: string) {
    this.badges = this.http.get('https://api.stackexchange.com/2.2/users/' + id + '?order=desc&sort=reputation&site=stackoverflow');
    this.badges.subscribe(x => {

      const temp = x.items[0].badge_counts;
      this.badgeArr = [temp.gold, temp.silver, temp.bronze];
      this.badge.next(this.badgeArr);
      console.log(this.badgeArr);
    });
  }

  /**
   * This method retrieve the badge data from stackoverflow API
   */
  getBadges()
  {
    return this.badge;
  }
  
  // assign to commentArr
  /*** 
   * @param id string
   * This method retrieve the comment data from the stack-overflow API
   * 
  */
  getCommentData(id: string) {
    // tslint:disable-next-line: max-line-length
    this.http.get('https://api.stackexchange.com/2.2/users/' + id + '/comments?page=5&pagesize=5&order=desc&sort=creation&site=stackoverflow')
      .subscribe(res => {

        let p = res as Comments;

        let size = p.items.length;

        for (let i = 0; i < size; i++) {
          let g = p.items[i].post_id;
          if (!(g == null)) {
            this.commentsArr = this.commentsArr.concat(g);
          }
          console.log(res);
        }
        this.comment.next(this.commentsArr);
        console.log(this.commentsArr);
      });
  }

  // assign to questionArr
  /** 
   * @param string id
   * This method retrieve the questions ID from the stack-overflow API
  */
  getQeustionID(id: string) {
    let m = 0;
    // tslint:disable-next-line: max-line-length
    this.http.get('https://api.stackexchange.com/2.2/users/' + id + '/answers?page=3&pagesize=3&order=desc&sort=activity&site=stackoverflow').
      subscribe(res => {
        let p = res as Answers;
        let size = p.items.length;

        for (let i = 0; i < size; i++) {
          let g = p.items[i].question_id;
          if (!(g == null)) {
            this.answersArr = this.answersArr.concat(g);
          }
        }
        this.answer.next(this.answersArr);
        console.log(this.answersArr);
      });
  }

  /** 
   * This method retrieve the stackoverflow-comment
  */
  getComment(){
   return this.comment;
  }

  /** 
   * This method retrieve the stackoverflow answer 
  */
  getAnswer(){
  return this.answer;
  }

  // methods saves It to the DB
  // Methods that uses OUR JAVA SERVICES
 /** 
  * @param string id 
  * @type Observable<any>
  * This method first setup info. 
  * we retrieve the info using http-post info generate by Java services.
  * we are able to save info to Data-base from the URL of the candidate.
  * 
 */
  save(id: string): Observable<any> {
    // make StackCanadidate object
    const candidate = {
      stackId: id,
      badge: this.badgeArr,
      answersLinks: this.answersArr,
      commentsLinks: this.commentsArr
    };
    return this.http.post('http://localhost:8090/api/candidate/', candidate);
  }

  // Update prob not needed
  /** 
   * @param string id
   * @type Observable<any>
   * This method first setup candidate info.
   * then it retrieve teh info by using http-post info generate by Java services.
   * we are able to update teh info to data-base from the URL of the candidate.
  */

  update(id: string): Observable<any> {
    // updated object with same Stack id
    const candidate = {
      stackId: id,
      badge: this.badgeArr,
      answersLinks: this.answersArr,
      commentsLinks: this.commentsArr
    };
    return this.http.put('http://localhost:8090/api/candidate/' + id, candidate);
  }

  // Get candidate
  /** 
   * @param string id
   * @type Observable<any>
   * This method retrieve the infomation form candidate 
  */
  getCandidateData(id: string) {
    this.http.get('http://localhost:8090/api/candidate/' + id).subscribe( (res: any) => {
      this.badge.next(res.badge);
      this.comment.next(res.commentsLinks);
      this.answer.next(res.answersLinks);
    });
  }
}