import { Component, OnInit } from '@angular/core';
import { TweetsService } from '../../services/tweets-service.service';
import { Tweet } from '../../model/tweet';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tweets-list',
  templateUrl: './tweets-list.component.html',
  styleUrls: ['./tweets-list.component.css'],
  providers: [TweetsService]
})
export class TweetsListComponent implements OnInit {
  public tweets : any[] = [];
  constructor(private tweetService: TweetsService) { }

  ngOnInit() {
    this.getTweets();
  }

  getTweets() {
    this.tweetService.getTweets().subscribe(
      res => {
        let data = res.data;
        console.log(res.data);
        for (var i = 0; i < data.length; i++) {
          console.log(data[i])
          this.tweets[i] = new Tweet(data[i]);
          this.tweets[i].id = data[i]["_id"]
          this.tweets[i].created_at = data[i]["created_at"].replace('+0000','');
          this.tweets[i].text = data[i]["text"]
        }
        console.log(this.tweets)
      },
      error => {
        console.log(error);
      }
    )
  }
}
