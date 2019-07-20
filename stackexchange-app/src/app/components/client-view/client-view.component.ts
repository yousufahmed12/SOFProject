import { Component, OnInit } from '@angular/core';
import { StackOverflowService } from 'src/app/services/stack-overflow.service';

@Component({
  selector: 'app-client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.css']
})
export class ClientViewComponent implements OnInit {

  // Candidate URL that provided by clksource, or can be changed by just User ID
  input: string;
  answers: number = 0;
  comment: number = 0;
  badgeList: any[] = [0, 0, 0];

  constructor(private service: StackOverflowService) {
    // on Client view this should run automatically
    // this.getCandidate();
  }

  ngOnInit() {}

  convertUrlToId(url: string): string {
    let id: string = url;
    id = id.replace('https://stackoverflow.com/users/','');
    const a: string[] = id.split('/');
    id = a[0].trim();
    return id;
  }

  getCandidate() {
    const id = this.convertUrlToId(this.input);

    this.service.getCandidateData(id);

    this.service.getAnswer().subscribe((res: any) => {
      this.answers = res.length;
    });

    this.service.getBadges().subscribe((res: any) => {
      this.badgeList = res;
    });

    this.service.getComment().subscribe((res: any) => {
      this.comment = res.length;
    });
  }

}
