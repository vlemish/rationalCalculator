import { Component, HostListener, OnInit } from '@angular/core';
import { RationalNumber } from '../rational-number';
import { HttpService } from '../http.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'rational-calculator',
  templateUrl: './rational-calculator.component.html',
  styleUrls: ['./rational-calculator.component.css']
})
export class RationalCalculatorComponent implements OnInit {

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
  constructor(private service: HttpService) { }

  ngOnInit(): void {
    this.changeInputFocus(0);
  }

  //sends the expression to the server and gets the result
  onEqualsPressed(){
    this.service.getResult(this.expression).subscribe(rn=>
      {
        this.resultedRN=rn;
        console.log(this.resultedRN);
        this.isShow = true;
      }
        );    
  }

  //WORKS ONLY WITH FORM!
  onRemoveClicked(){

    if(this.isInteger){

      length = this.rNumber.integer.toString().length;
      this.rNumber.integer = parseInt(length > 1 ? this.rNumber.integer.toString().slice(0, length-1) : '0');
    }

    if(this.isNumerator){
      length = this.rNumber.numerator.toString().length;
      this.rNumber.numerator = parseInt(length > 1 ? this.rNumber.numerator.toString().slice(0, length-1) : '0');
    }

    if(this.isDenumerator){
      length = this.rNumber.denumerator.toString().length;
      this.rNumber.denumerator = parseInt(length > 1 ? this.rNumber.denumerator.toString().slice(0, length-1) : '0');
    }


  }

  //clears everything on the display and sets everything to its default
  onClearClicked(){
    this.rNumber.integer = 0;
    this.rNumber.numerator = 0;
    this.rNumber.denumerator = 0;
    this.resultedRN.integer = 0;
    this.resultedRN.numerator = 0;
    this.resultedRN.denumerator = 0;
    this.rNumbers=[];
    this.operators="";
    this.expression="";
    this.isShow=false;
  }

  //handles button click on operators and adds current operator and rational number to string
  onOperatorClicked(o : string){

        if(this.expression.length<=0){

          this.expression = this.rNumber.toString();
          this.rNumbers.push(new RationalNumber(this.rNumber.integer, this.rNumber.numerator, this.rNumber.denumerator));
          console.log(this.rNumbers);
        }

        else{

          this.expression = this.expression + " " + o + " " + this.rNumber.toString();
          this.rNumbers.push(new RationalNumber(this.rNumber.integer, this.rNumber.numerator, this.rNumber.denumerator));
          this.operators+= o;
          console.log(this.operators);
        }

        console.log(this.expression);
  }

  //handles button click and adds number to correct input field
  onNumberClicked(o : string){

    if(this.isInteger){

      this.rNumber.integer = parseInt(this.rNumber.integer + o);
    }

    if(this.isNumerator){

      this.rNumber.numerator = parseInt(this.rNumber.numerator + o);
    }

    if(this.isDenumerator){

      this.rNumber.denumerator = parseInt(this.rNumber.denumerator + o);
    }
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


  @HostListener('document:keydown', ['$event']) onKeyPressed(e){
    // console.log(this.button1);
    console.log(e.keyCode);
    switch(e.keyCode){
           //Numeric buttons
        case 48:{
            let el = document.getElementsByName('Button0');
            el[0].focus();
            break;
        }
        case 49:{
            let el = document.getElementsByName('Button1');
            el[0].focus();
            el[0].click();
            break;
        }
        case 50:{
            let el = document.getElementsByName('Button2');
            el[0].focus();
            el[0].click();
            break;
        }
        case 51:{
            let el = document.getElementsByName('Button3');
            el[0].focus();
            el[0].click();
            break;
        }
        case 52:{
            let el = document.getElementsByName('Button4');
            el[0].focus();
            el[0].click();
            break;
        }
        case 53:{
            let el = document.getElementsByName('Button5');
            el[0].focus();
            el[0].click();
            break;
        }
        case 54:{
            let el = document.getElementsByName('Button6');
            el[0].focus();
            el[0].click();
            break;
        }
        case 55:{
            let el = document.getElementsByName('Button7');
            el[0].focus();
            el[0].click();
            break;
        }
        case 56:{
            let el = document.getElementsByName('Button8');
            el[0].focus();
            el[0].click();
            break;
        }
        case 57:{
            let el = document.getElementsByName('Button9');
            el[0].focus();
            el[0].click();
            break;
        }   
        
        case 187:{
            let el = document.getElementsByName('EqualsButton');
            el[0].focus();
            el[0].click();
            break;
        }

        case 189:{
            let el = document.getElementsByName('MinusButton');
            el[0].focus();
            el[0].click();
            break;
        }
        
        case 191:{
            let el = document.getElementsByName('DivideButton');
            el[0].focus();
            el[0].click();
            break;
        }
        //UNDONE
        case 37:{
          this.changeInputFocus(-1);
        }
        case 39:{
          this.changeInputFocus(+1);
        }
    }

    if(e.shiftKey && e.keyCode == 56){
        let el = document.getElementsByName('MultiplyButton');
        el[0].focus();
        el[0].click();
    }

    if(e.shiftKey && e.keyCode == 187){
      let el = document.getElementsByName('PlusButton');
      el[0].focus();
      el[0].click();
  }

        // let vari = document.getElementsByName('Button4');
    // vari[0].focus();
    // console.log(vari[0]);

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
    this.inputFocus=0;
  }

  else if(this.inputFocus>2){
    this.inputFocus=2;
  }

  //sets focus according to value of inputFocus variable
  let inputs = this.inputForms;
  switch(this.inputFocus){

    case 0:{
      inputs['int'][0].focus();
      console.log("hh");
    }
    case 1:{
      inputs['num'][0].focus();
    }
    case 2:{
      inputs['denum'][0].focus();
    }
  }

}

}
