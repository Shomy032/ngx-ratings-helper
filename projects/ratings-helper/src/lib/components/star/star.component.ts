import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-rating-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit {

  private minGradValue = 0;
  private maxGradValue = 100;

  private _value!: number;

  @Input() set value(val : number){
    this.validateValueBeforeSetting(val);
    this._value = val;
  };

  @Input() max: number = 5;
  @Input() min: number = 0;

  @Input() size: number = 28;
  @Input() colorActive: string = "yellow";
  @Input() colorInactive: string = "gray";
  @Input() borderColor: string = "gray";
  @Input() disableBorder: boolean = false;
  @Input() disabled: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.validateValueBeforeSetting(this.value);
  }

  public get value(): number {
    return this._value;
  }

  private validateValueBeforeSetting(value : number):void{
    if(this.value < this.min || this.value > this.max){
      this.throwInvalidValue();
    }
  }

  get gradientValue(){
    return `linear-gradient(${this.createGradient})`;
  }

  get createGradient(){
    const value = this.calculateGradientValue;
    return `90deg, ${this.colorActive} 0%, ${this.colorActive} ${value}%, ${this.colorInactive} ${value}%`
  }

  get calculateGradientValue(): number {
    const validRange = this.max - this.min;
    const validRangePercent = validRange / 100;
    const currentPercent = this.value / validRangePercent;
    const validStyleRange = this.maxGradValue - this.minGradValue;
    return ( validStyleRange * currentPercent ) / 100;
  }

  private throwInvalidValue(): never{
    throw new Error(`Value cannot be more then max value , or less then min value; ${this.value}, ${this.min} , ${this.max}`)
  }
}
