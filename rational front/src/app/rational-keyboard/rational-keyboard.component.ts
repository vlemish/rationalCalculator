import { AfterViewInit, Component, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { HttpService } from '../http.service';
import { RationalDisplayComponent } from '../rational-display/rational-display.component';
import { RationalNumber } from '../rational-number';

@Component({
  selector: 'rational-keyboard',
  templateUrl: './rational-keyboard.component.html',
  styleUrls: ['./rational-keyboard.component.css']
})
export class RationalKeyboardComponent implements AfterViewInit {

  @ViewChild(RationalDisplayComponent)
  display : RationalDisplayComponent; 

  constructor(private service: HttpService) { }

  ngAfterViewInit(): void {
    this.display.changeInputFocus(0);
  }

  //sends the expression to the server and gets the result
  onEqualsPressed(){
    this.display.expression = this.display.expression + " " + this.display.operators[this.display.operators.length-1] + " " + this.display.rNumber.toString();
    this.service.getResult(this.display.expression).subscribe(rn=>
      {
        this.display.resultedRN=rn;
        console.log(this.display.resultedRN);
        this.display.isShow = true;
        this.display.isNumber=this.display.resultedRN.integer>0 && this.display.resultedRN.numerator<=0;
        this.display.isMixedRN=this.display.resultedRN.integer>0 &&  this.display.resultedRN.numerator>0;
        this.display.isFraction=this.display.resultedRN.integer<=0 && this.display.resultedRN.numerator>0;
        
      }
        );    
  }

  //WORKS ONLY IN FORM!
  onRemoveClicked(){

    if(this.display.isInteger){
      length = this.display.rNumber.integer.toString().length;
      this.display.rNumber.integer = parseInt(length > 1 ? this.display.rNumber.integer.toString().slice(0, length-1) : '0');
    }

    if(this.display.isNumerator){
      length = this.display.rNumber.numerator.toString().length;
      this.display.rNumber.numerator = parseInt(length > 1 ? this.display.rNumber.numerator.toString().slice(0, length-1) : '0');
    }

    if(this.display.isDenumerator){
      length = this.display.rNumber.denumerator.toString().length;
      this.display.rNumber.denumerator = parseInt(length > 1 ? this.display.rNumber.denumerator.toString().slice(0, length-1) : '0');
    }


  }

  //clears everything on the display and sets everything to its default
  onClearClicked(){
    this.display.rNumber.setDefault();
    // this.resultedRN.setDefault(); // doesn't work 
    this.display.resultedRN.integer=0;
    this.display.resultedRN.numerator=0;
    this.display.resultedRN.denumerator=0;
    this.display.rNumbers=[];
    this.display.operators="";
    this.display.expression="";
    this.display.isShow=false;
    this.display.DivWidth=0;
  }

  //handles button click on operators and adds current operator and rational number to string
  onOperatorClicked(o : string){

    this.display.DivWidth += 103;

        if(this.display.expression.length<=0){

          this.display.expression = this.display.rNumber.toString();
          this.display.rNumbers.push(new RationalNumber(this.display.rNumber.integer, this.display.rNumber.numerator, this.display.rNumber.denumerator));
          this.display.operators+=o;
          console.log(this.display.rNumbers);
          this.display.rNumber.setDefault();
          return;
        }

        else if(this.display.rNumbers.length>=4){

          this.display.rNumbers = this.display.rNumbers.slice(1,this.display.rNumbers.length);
          this.display.expression = this.display.expression + " " + o + " " + this.display.rNumber.toString();
          this.display.operators = this.display.operators.slice(1, this.display.operators.length);
          this.display.rNumbers.push(new RationalNumber(this.display.rNumber.integer, this.display.rNumber.numerator, this.display.rNumber.denumerator)); 
          this.display.operators+= o;
          this.display.rNumber.setDefault();
          return;
        }


        else{

          this.display.expression = this.display.expression + " " + o + " " + this.display.rNumber.toString();
          this.display.rNumbers.push(new RationalNumber(this.display.rNumber.integer, this.display.rNumber.numerator, this.display.rNumber.denumerator));
          this.display.operators+= o;
          this.display.rNumber.setDefault();
          return;
      
        }
        
  }

  //handles button click and adds number to correct input field
  onNumberClicked(o : string){
    if(this.display.isInteger){

      this.display.rNumber.integer = parseInt(this.display.rNumber.integer + o);
    }

    if(this.display.isNumerator){

      this.display.rNumber.numerator = parseInt(this.display.rNumber.numerator + o);
    }

    if(this.display.isDenumerator){

      this.display.rNumber.denumerator = parseInt(this.display.rNumber.denumerator + o);
    }
  }


  @HostListener('document:keydown', ['$event']) onKeyPressed(e){

    switch(e.keyCode){
           //Numeric buttons
        case 48:{
            this.imitateKeyPressing('Button0');
            break;
        }
        case 49:{
            this.imitateKeyPressing('Button1');
            break;
        }
        case 50:{
            this.imitateKeyPressing('Button2');
            break;
        }
        case 51:{
            this.imitateKeyPressing('Button3');
            break;
        }
        case 52:{
            this.imitateKeyPressing('Button4');
            break;
        }
        case 53:{
            this.imitateKeyPressing('Button5');
            break;
        }
        case 54:{
            this.imitateKeyPressing('Button6');
            break;
        }
        case 55:{
            this.imitateKeyPressing('Button7');
            break;
        }
        case 56:{
            this.imitateKeyPressing('Button8');
            break;
        }
        case 57:{
            this.imitateKeyPressing('Button9');
            break;
        }   
        
        //remove 1 entry (C button)
        case 8:{
          this.imitateKeyPressing('CButton');
          break;
        }

        //Operations (-,/)


        case 189:{
            this.imitateKeyPressing('MinusButton');
            break;
        }
        
        case 191:{
            this.imitateKeyPressing('DivideButton');
            break;
        }

        //navigates between input forms
        case 37:{
          this.display.changeInputFocus(+1);
        }
        case 39:{
          this.display.changeInputFocus(+1);
        }
    }

    
    //Operations (*,+,=)
    if(e.shiftKey && e.keyCode == 56){
        this.imitateKeyPressing('MultiplyButton');
    }
   
    else if(e.shiftKey && e.keyCode == 187){
      this.imitateKeyPressing('PlusButton');
  }     

    else if(e.keyCode == 187){
      this.imitateKeyPressing('EqualsButton');
  }


}

imitateKeyPressing(name : string){
  let el = document.getElementsByName(name);
  el[0].focus();
  el[0].click();
}

}
