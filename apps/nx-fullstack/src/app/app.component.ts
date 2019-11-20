import { AppService } from './services/app.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@nx-fullstack/api-interfaces';

@Component({
  selector: 'nx-fullstack-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // hello$ = this.http.get<Message>('/api/hello');
  
  listings: any = []

  constructor(private appService: AppService) {
    // this.http.get('https://rvbnb.herokuapp.com/api/listings')
    //   .subscribe(res => {
    //     console.log(res)
    //     this.listings = res
    //   })
  }

  ngOnInit() {
    this.appService.getListings()
      .subscribe(res => {
        console.log(res)
        this.listings = res
      })
  }
}
