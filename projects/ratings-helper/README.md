# RatingsHelper

Package for Angular app, with all essential components for ratings, like stars and inputs.

## Demo Exaples


[Try Our Components Yourself](https://ngx-lib-demo-examples.web.app/)

https://ngx-lib-demo-examples.web.app/


### Dev Quick Start

       <ngx-rating-input
        ngDefaultControl
        [max]="5"
        [min]="0"
        [disabled]="true" 
        customClass="my-class"
        [formControl]="ratingControl">
        </ngx-rating-input>

#### Add custom colors : 

     <ngx-rating-input
        ngDefaultControl
        [max]="5"
        [min]="0"

        colorInactive="green"
        colorActive="orange"

        [disabled]="true" 
        customClass="my-class"
        [formControl]="ratingControl">
        </ngx-rating-input>