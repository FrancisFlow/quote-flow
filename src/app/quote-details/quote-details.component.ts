import { Component, OnInit, Input, } from '@angular/core';
import { Quote } from '@angular/compiler';
import { QuotesComponent } from '../quotes/quotes.component';
@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input () quote?:Quote;

  constructor() { }

  ngOnInit(): void {
  }

    downTheVote() {

      return this.quote.downVote++;
  //  let voteString = ViewChild("downVote");
  //   return parseInt(voteString) + 1;
    
  }
    upTheVote() {
      
     return this.quote.upVote++;

    }

}
