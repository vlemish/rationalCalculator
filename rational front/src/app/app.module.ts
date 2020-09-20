import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';


import { HttpClientModule }   from '@angular/common/http';
import { RationalCalculatorComponent } from './rational-calculator/rational-calculator.component';
import { HttpService } from './http.service';
import { RationalDisplayComponent } from './rational-display/rational-display.component';
import { RationalKeyboardComponent } from './rational-keyboard/rational-keyboard.component';

@NgModule({
    imports:      [ BrowserModule, FormsModule, HttpClientModule ],
    declarations: [ AppComponent, RationalCalculatorComponent, RationalDisplayComponent, RationalKeyboardComponent],
    providers: [ HttpService ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }