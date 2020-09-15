import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';


import { HttpClientModule }   from '@angular/common/http';
import { RationalCalculatorComponent } from './rational-calculator/rational-calculator.component';
import { HttpService } from './http.service';

@NgModule({
    imports:      [ BrowserModule, FormsModule, HttpClientModule ],
    declarations: [ AppComponent, RationalCalculatorComponent],
    providers: [ HttpService ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }