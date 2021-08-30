import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
import { QUOTES } from '../QUOTES';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  
  quotes = QUOTES;
  selectedQuote?: Quote;

  constructor() { }
  
  ngOnInit(): void {
  }
  onSelect(quote: Quote): void {
    this.selectedQuote = quote;
  }

}
