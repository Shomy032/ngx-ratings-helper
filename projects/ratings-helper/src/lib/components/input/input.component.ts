import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ngx-rating-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  private _value!: number;
  private defaultMax = 5;
  private defaultMin = 0;
  starList: number[] = [];

  @Input() defaultValue: number = 0;

  @Input() set value(val : number){
    this.validateValueBeforeSetting(val);
    this._value = val;
  };

  @Input() color!: string;
  @Input() customClass!: string;
  @Input() disabled!: boolean;
  @Input() min!: number;
  @Input() max!: number;
  @Input() size: number = 28;
  @Input() formControl: FormControl | null = null;

  @Output() valueChanges: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {


    this.validateInputs();
    this.createStarList();
  }


  createStarList(){
    this.starList = Array(this.numOfStars).fill(0).map((x,i)=> i);
  }

  /*
  Method used for coloring stars,
   based on index and current input value,

   0 is empty star, 5 is full colored star,
   value is indexed with 0,
   but its emmiting up with 1 base inedxing
   soo when emmiting + 1 is added
   in this method value is 0 based indexed 
  */ 
  singleStarValue(index: number): number{
    return index < this.value ? 5 : 0;
  }

  get numOfStars(): number{
    return this.max - this.min;
  }

  private validateInputs(): void{
    // todo add more validations
    this.validateRangeInputs();
  }

  private validateValueBeforeSetting(val: number): void{
    if((val < 0 || !Number.isInteger(val))){
      this.throwInvalidMaxMinInput();
    }
  }

  private validateRangeInputs(): void{
    if(!Number.isInteger(this.max) ||
     !Number.isInteger(this.min) ||
      this.max < 0 ||
       this.min < 0){
      this.throwInvalidMaxMinInput();
    }
  }

  onStarClick(starIndex : number){
    if(starIndex || starIndex === 0){
      this.emitNewValue(starIndex);
    }
  }
  
  /*
   Method emmiting new values ( if not disabled )
   and rendering new values inside,
   with +1 because component uses 0 base inexing
   but value must me 1 base indexed

   2 ways 
   - emmitng by emmiter ( everytime )
   - setting value to control if control is passed
  */ 
  private emitNewValue(newVal : number): void{
    if(this.disabled){
      return;
    }

    if(this.formControl){
      this.formControl.patchValue(newVal + 1);
    }
    this.valueChanges.emit(newVal + 1);
    this._value = newVal + 1;
  }

  private throwInvalidMaxMinInput(): never{
    throw new Error("Value, Max and Min inputs must be possitive integers ( or 0 ).")
  }

     /* form control have heighest priority */ 
     get value(){
      return this.formControl ? this.formControl.value : this._value;
    }
}
