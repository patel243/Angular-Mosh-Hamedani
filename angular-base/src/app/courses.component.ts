import { CoursesService } from './course/courses.service';
import { Component, OnInit } from '@angular/core';

// To make a class a component use the decorator

@Component({
  selector: "courses",
  template: `
    <h2>{{getTitle()}}</h2>
    Here we are using a directive
    * represents we are modifying the structure of the DOM
    <ul>
        <li *ngFor="let course of courses">
            {{course}}
        </li>
    </ul>
    <h2 [textContent]="title"></h2>
    Here we are using the property binding in 
    the second case which is cleaner
    This works only one way from component to dom
    if it feels the component changed,the view will be
    updated but any change in the dom will not affect the component.
    <img src="{{imageUrl}}">
    <img [src]="title"/>
    <table>
        This way we are telling Angular that we are 
        targetting colspan attribute of the td element
        <tr [attr.colspan]="colSpan"></tr>
    </table>
    This is the class binding
    <div (click)="onDivClicked()">
        <button class="btn btn-primary"
        (click)="onSave($event)"
        [class.active]="isActive"
        [style.backgroundColor]="isActive ? 'red': 'white'">Save</button>
    </div>
    Using the email temporary variable
    This mimics the 2 way data binding 
    <input [value]="email"
    (keyup.enter)="email = $event.target.value;onKeyUp2()"/>
    
    Using the standard two way data binding syntax
    [()] This is known as the Banana in the Box
    *******************************************
    <input [(ngModel)]="email"
    (keyup.enter)="onKeyUp2()"/>
    Here we have a Banana in the Box Notation.
    *************************************
    <input
    (keyup.enter)="onKeyUp($event)"/>

    Pipes are used to format the data

    Head over to angular.io and Search for 
    DecimalPipe and the DatePipe

    Now using the pipes we will format the data 
    for the course object that we are having
    We will use the pipe operator
    {{course.title | uppercase | lowercase}} <br>
    {{course.students | number}} <br>
    {{course.rating | number:'1.2-2'}} <br>
    {{course.price | currency:'AUD':true:'3.2-2'}} <br>
    {{course.releaseDate | date:'shortDate'}} 
    
    Custom Pipes in Angular 6
        {{text | summary:10}}
    `,
  styleUrls: ["./courses.component.css"]
})
export class CoursesComponent implements OnInit {
  isActive: boolean = true;
  title: string = "List of the courses";
  courses;
  course = {
    title: "The Complete Angular Course",
    rating: 4.32,
    students: 141213,
    price: 10.323,
    releaseDate: new Date(2016, 3, 1)
  };
  text = `
    lorem ipsum dolor amet lorem ipsum dolor ametlorem ipsum dolor ametlorem ipsum dolor
     ametlorem ipsum dolor ametlorem ipsum dolor amet
    `
  colSpan = 2;
  imageUrl = "the image url goes here";
  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  onKeyUp($event) {
    // if($event.keyCode === 13){
    //     console.log('Event was pressed');
    // }
    //For the keyup event we can use the filter
    // enter
    console.log("Enter was pressed");
    console.log($event.target.value);
  }
  email = "me@example.com";
  onKeyUp2() {
    console.log(`The email id of the user is ${this.email}`);
  }
  onDivClicked() {
    console.log("Div was clicked");
  }
  onSave($event): void {
    $event.stopPropagation();
    console.log("Button was clicked", $event);
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
}
