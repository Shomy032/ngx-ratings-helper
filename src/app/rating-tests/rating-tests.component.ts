import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-rating-tests',
  templateUrl: './rating-tests.component.html',
  styleUrls: ['./rating-tests.component.scss']
})
export class RatingTestsComponent  {


  size1: number = 30;
  value1: number = 3;

  isDisabled3 = true;
  isDisabled5 = false;
  isDisabled6 = false;

  ratingControl1 = new FormControl(2);
  ratingControl2 = new FormControl(5);
  ratingControl3 = new FormControl(3);
  ratingControl4 = new FormControl(4);
  ratingControl5 = new FormControl(3);
  ratingControl6 = new FormControl(3);

  handleValueChanges(event : number){
  }
}
