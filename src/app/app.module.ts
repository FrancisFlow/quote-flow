import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteFormComponent,
    QuotesComponent,
    QuoteDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
