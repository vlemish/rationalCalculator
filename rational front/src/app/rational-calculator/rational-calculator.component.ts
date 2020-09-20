import { Component, HostListener, OnInit } from '@angular/core';
import { RationalNumber } from '../rational-number';
import { HttpService } from '../http.service';

import { RationalDisplayComponent } from '../rational-display/rational-display.component';
import { RationalKeyboardComponent } from '../rational-keyboard/rational-keyboard.component';

@Component({
  selector: 'rational-calculator',
  templateUrl: './rational-calculator.component.html',
  styleUrls: ['./rational-calculator.component.css']
})
export class RationalCalculatorComponent implements OnInit {
 
//   expression : string = "";
//   operators  :  string = "";

//   rNumbers : RationalNumber[] = [];
//   rNumber = new RationalNumber(0, 0, 0);

//   resultedRN = new RationalNumber(0, 0, 0);

//   //variable responsible for showing the result
//   isShow : boolean = false;

//   //variables to store input field state
//   isInteger :  boolean = false;
//   isNumerator : boolean = false;
//   isDenumerator : boolean = false;


//   //input forms states
//   inputForms : Object={
//     int : this.getIntegerInput(),
//     num : this.getNumeratorInput(),
//     denum : this.getDenumeratorInput()
//   };

//   inputFocus : number = 0;


//   //boolens to find out how to print rational number
//   isNumber : boolean = false;
//   isMixedRN : boolean = false;
//   isFraction : boolean =  false;

//   //variable for dynamic changing width of "display-content" div
//   _divWidth : number = 0;

//   get DivWidth(){
//     return this._divWidth;
//   }

//   set DivWidth(value : number){
//     if(this.DivWidth<=400 || value === 0){
//       this._divWidth = value;
//     }
//   }

//   constructor(private service: HttpService) { }

  ngOnInit(): void {
    // this.changeInputFocus(0);
  }

//   //sends the expression to the server and gets the result
//   onEqualsPressed(){
//     this.expression = this.expression + " " + this.operators[this.operators.length-1] + " " + this.rNumber.toString();
//     this.service.getResult(this.expression).subscribe(rn=>
//       {
//         this.resultedRN=rn;
//         console.log(this.resultedRN);
//         this.isShow = true;
//         this.isNumber=this.resultedRN.integer>0 && this.resultedRN.numerator<=0;
//         this.isMixedRN=this.resultedRN.integer>0 &&  this.resultedRN.numerator>0;
//         this.isFraction=this.resultedRN.integer<=0 && this.resultedRN.numerator>0;
        
//       }
//         );    
//   }

//   //WORKS ONLY IN FORM!
//   onRemoveClicked(){

//     if(this.isInteger){

//       length = this.rNumber.integer.toString().length;
//       this.rNumber.integer = parseInt(length > 1 ? this.rNumber.integer.toString().slice(0, length-1) : '0');
//     }

//     if(this.isNumerator){
//       length = this.rNumber.numerator.toString().length;
//       this.rNumber.numerator = parseInt(length > 1 ? this.rNumber.numerator.toString().slice(0, length-1) : '0');
//     }

//     if(this.isDenumerator){
//       length = this.rNumber.denumerator.toString().length;
//       this.rNumber.denumerator = parseInt(length > 1 ? this.rNumber.denumerator.toString().slice(0, length-1) : '0');
//     }


//   }

//   //clears everything on the display and sets everything to its default
//   onClearClicked(){
//     this.rNumber.setDefault();
//     // this.resultedRN.setDefault(); // doesn't work 
//     this.resultedRN.integer=0;
//     this.resultedRN.numerator=0;
//     this.resultedRN.denumerator=0;
//     this.rNumbers=[];
//     this.operators="";
//     this.expression="";
//     this.isShow=false;
//     this.DivWidth=0;
//   }

//   //handles button click on operators and adds current operator and rational number to string
//   onOperatorClicked(o : string){

//     this.DivWidth += 103;
  

//         if(this.expression.length<=0){

//           this.expression = this.rNumber.toString();
//           this.rNumbers.push(new RationalNumber(this.rNumber.integer, this.rNumber.numerator, this.rNumber.denumerator));
//           this.operators+=o;
//           console.log(this.rNumbers);
//           this.rNumber.setDefault();
//           return;
//         }

//         else if(this.rNumbers.length>=4){

//           this.rNumbers = this.rNumbers.slice(1,this.rNumbers.length);
//           this.expression = this.expression + " " + o + " " + this.rNumber.toString();
//           this.operators = this.operators.slice(1, this.operators.length);
//           this.rNumbers.push(new RationalNumber(this.rNumber.integer, this.rNumber.numerator, this.rNumber.denumerator)); 
//           this.operators+= o;
//           this.rNumber.setDefault();
//           return;
//         }


//         else{

//           this.expression = this.expression + " " + o + " " + this.rNumber.toString();
//           this.rNumbers.push(new RationalNumber(this.rNumber.integer, this.rNumber.numerator, this.rNumber.denumerator));
//           this.operators+= o;
//           this.rNumber.setDefault();
//           return;
      
//         }
        
//   }

//   //handles button click and adds number to correct input field
//   onNumberClicked(o : string){

//     if(this.isInteger){

//       this.rNumber.integer = parseInt(this.rNumber.integer + o);
//     }

//     if(this.isNumerator){

//       this.rNumber.numerator = parseInt(this.rNumber.numerator + o);
//     }

//     if(this.isDenumerator){

//       this.rNumber.denumerator = parseInt(this.rNumber.denumerator + o);
//     }
//   }


//   //checks to find out which input field is on focus
//   onFocus(el : string){


//       if(el ==='integer') {

//         this.isInteger=true;
//         this.isNumerator=false;
//         this.isDenumerator=false;
//         return;
//       }

//       if(el ==='numerator') {

//         this.isInteger=false;
//         this.isNumerator=true;
//         this.isDenumerator=false;
//         return;
//       }

//       if(el ==='denumerator'){

//         this.isInteger=false;
//         this.isNumerator=false;
//         this.isDenumerator=true;
//         return;
//       }
//   }


//   @HostListener('document:keydown', ['$event']) onKeyPressed(e){

//     switch(e.keyCode){
//            //Numeric buttons
//         case 48:{
//             this.imitateKeyPressing('Button0');
//             break;
//         }
//         case 49:{
//             this.imitateKeyPressing('Button1');
//             break;
//         }
//         case 50:{
//             this.imitateKeyPressing('Button2');
//             break;
//         }
//         case 51:{
//             this.imitateKeyPressing('Button3');
//             break;
//         }
//         case 52:{
//             this.imitateKeyPressing('Button4');
//             break;
//         }
//         case 53:{
//             this.imitateKeyPressing('Button5');
//             break;
//         }
//         case 54:{
//             this.imitateKeyPressing('Button6');
//             break;
//         }
//         case 55:{
//             this.imitateKeyPressing('Button7');
//             break;
//         }
//         case 56:{
//             this.imitateKeyPressing('Button8');
//             break;
//         }
//         case 57:{
//             this.imitateKeyPressing('Button9');
//             break;
//         }   
        
//         //remove 1 entry (C button)
//         case 8:{
//           this.imitateKeyPressing('CButton');
//           break;
//         }

//         //Operations (-,/)


//         case 189:{
//             this.imitateKeyPressing('MinusButton');
//             break;
//         }
        
//         case 191:{
//             this.imitateKeyPressing('DivideButton');
//             break;
//         }

//         //navigates between input forms
//         case 37:{
//           this.changeInputFocus(+1);
//         }
//         case 39:{
//           this.changeInputFocus(+1);
//         }
//     }

    
//     //Operations (*,+,=)
//     if(e.shiftKey && e.keyCode == 56){
//         this.imitateKeyPressing('MultiplyButton');
//     }
   
//     else if(e.shiftKey && e.keyCode == 187){
//       this.imitateKeyPressing('PlusButton');
//   }     

//     else if(e.keyCode == 187){
//       this.imitateKeyPressing('EqualsButton');
//   }


// }


// getIntegerInput(){
//   return document.getElementsByName('int');
// }

// getNumeratorInput(){
//   return document.getElementsByName('num');
// }

// getDenumeratorInput(){
//   return document.getElementsByName('denum');
// }

// changeInputFocus(changer : number){
//   this.inputFocus+=changer;

//   //sets the range (input can't be lesser than zero and higher than two!)
//   if(this.inputFocus<0){
//     this.inputFocus=2;
//   }

//   else if(this.inputFocus>2){
//     this.inputFocus=0;
//   }

//   //sets the focus according to the value of inputFocus variable
//   let inputs = this.inputForms;
//   switch(this.inputFocus){

//     case 0:{
//       inputs['int'][0].focus();
//       break;
//     }
//     case 1:{
//       inputs['num'][0].focus();
//       break
//     }
//     case 2:{
//       inputs['denum'][0].focus();
//       break
//     }
//   }
// }

// imitateKeyPressing(name : string){
//   let el = document.getElementsByName(name);
//   el[0].focus();
//   el[0].click();
// }

}
