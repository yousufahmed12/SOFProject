import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StackOverflowService {
  badges: Observable<any>;
  badgeArr;
  

  answers: Observable<any>;
  answersArr;

  comments: Observable<any>;
  commentsArr;

  constructor(private http: HttpClient) { }

  // get badges Already done
  getBadgesData(id: string) {
    this.badges = this.http.get('https://api.stackexchange.com/2.2/users/' + id + '?order=desc&sort=reputation&site=stackoverflow');
    this.badges.subscribe(x=>{
      const temp = x.items[0].badge_counts;
      this.badgeArr = [temp.gold, temp.silver, temp.bronze];
      console.log(this.badgeArr);
    });
  }

  // assign to commentArr
  getCommentData(id: string) {
    this.http.get('https://api.stackexchange.com/2.2/users/' + id + '/comments?page=5&pagesize=5&order=desc&sort=creation&site=stackoverflow&key=swdVWq4myfxBOCcR6AZEHg')
    .subscribe(response =>{
      this.commentsArr = response;
    });
    console.log(this.commentsArr);
  }

  // assign to questionArr
  getQeustionID(id: string) {
    this.http.get('https://api.stackexchange.com/2.2/users/146780/answers?page=3&pagesize=3&order=desc&sort=activity&site=stackoverflow').
    subscribe(res =>{
      console.log(res);
    });

  }

  // methods saves It to the DB
  // Methods that uses OUR JAVA SERVICES
  save(id : string): Observable<any> {
    // make StackCanadidate object
    const candidate = {
      stackId : id,
      badge : this.badgeArr,
      answersLinks: this.answersArr,
      commentsLinks: this.commentsArr
    };
    return this.http.post('http://localhost:8090/api/candidate/', candidate);
  }

  // Update prob not needed
  update(id: String): Observable<any>{
    // updated object with same Stack id
    const candidate = {
      stackId : id,
      badge : this.badgeArr,
      answersLinks: this.answersArr,
      commentsLinks: this.commentsArr
    };
    return this.http.put('http://localhost:8090/api/candidate/' + id, candidate );
  }

  // Get candidate
  getCandidateData(id: String): Observable<any> {
    return this.http.get('http://localhost:8090/api/candidate/' + id);
  }
}
