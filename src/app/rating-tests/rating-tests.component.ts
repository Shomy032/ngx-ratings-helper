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

  ratingControl1 = new FormControl(2);
  ratingControl2 = new FormControl(5);
  ratingControl3 = new FormControl(3);
  ratingControl4 = new FormControl(4);

  handleValueChanges(event : number){
  }
}
