import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { RationalNumber } from '../rational-number';

@Component({
  selector: 'rational-display',
  templateUrl: './rational-display.component.html',
  styleUrls: ['./rational-display.component.css']
})
export class RationalDisplayComponent implements OnInit {

   expression : string = "";
   operators  :  string = "";

   rNumbers : RationalNumber[] = [];
   rNumber = new RationalNumber(0, 0, 0);

   resultedRN = new RationalNumber(0, 0, 0);

  //variable responsible for showing the result
   isShow : boolean = false;

  //variables to store input field state
   isInteger :  boolean = false;
   isNumerator : boolean = false;
   isDenumerator : boolean = false;


  //input forms states
   inputForms : Object={
    int : this.getIntegerInput(),
    num : this.getNumeratorInput(),
    denum : this.getDenumeratorInput()
  };

   inputFocus : number = 0;


  //boolens to find out how to print rational number
   isNumber : boolean = false;
   isMixedRN : boolean = false;
   isFraction : boolean =  false;

  //variable for dynamic changing width of "display-content" div
  private _divWidth : number = 0;

   get DivWidth(){
    return this._divWidth;
  }

  set DivWidth(value : number){
    if(this.DivWidth<=300 || value === 0){
      this._divWidth = value;
    }
  }

  constructor(private service: HttpService) { }

  ngOnInit(): void {
    this.changeInputFocus(0);
    this.rNumber.setDefault();
  }

  //checks to find out which input field is on focus
  onFocus(el : string){


    if(el ==='integer') {

      this.isInteger=true;
      this.isNumerator=false;
      this.isDenumerator=false;
      return;
    }

    if(el ==='numerator') {

      this.isInteger=false;
      this.isNumerator=true;
      this.isDenumerator=false;
      return;
    }

    if(el ==='denumerator'){

      this.isInteger=false;
      this.isNumerator=false;
      this.isDenumerator=true;
      return;
    }
}


  getIntegerInput(){
    return document.getElementsByName('int');
  }
  
  getNumeratorInput(){
    return document.getElementsByName('num');
  }
  
  getDenumeratorInput(){
    return document.getElementsByName('denum');
  }
  
  changeInputFocus(changer : number){
    this.inputFocus+=changer;
  
    //sets the range (input can't be lesser than zero and higher than two!)
    if(this.inputFocus<0){
      this.inputFocus=2;
    }
  
    else if(this.inputFocus>2){
      this.inputFocus=0;
    }
  
    //sets the focus according to the value of inputFocus variable
    let inputs = this.inputForms;
    switch(this.inputFocus){
  
      case 0:{
        inputs['int'][0].focus();
        break;
      }
      case 1:{
        inputs['num'][0].focus();
        break
      }
      case 2:{
        inputs['denum'][0].focus();
        break
      }
    }
  }
  

}
