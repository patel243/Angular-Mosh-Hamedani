import { FavoriteChangedEventArgs } from './favorite.component';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // Using the View Encapsulation funda
  // This is mostly used in our case scenarios
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  courses;
  task = {
    title : 'Review applications',
    assignee: {
      name : 'John Smith'
    }
  }
  onLoadCourses(){
    this.courses = [

      { id: 1, name: 'course1' },
      { id: 2, name: 'course2' },
      { id: 3, name: 'course3' }
    ];
  }
  trackCourse(index,course){
    return course? course.id:undefined;
  }
  viewMode= 'map';
  // courses = [1,2,2,3,3];
  title = 'app';
  post = {
    title : 'This is the post one',
    isFavorite: true
  }
  onFavoriteChanged(eventArgs:FavoriteChangedEventArgs){
    console.log('Favorite Changed'+eventArgs);
  }
  onAddCourse(){
    const course = {
      id : 4,
      name: 'course4'
    }
    this.courses.push(course);
  }
  onRemoveCourse(course){
    let index = this.courses.indexOf(course);
    this.courses.splice(index,1);
  }
  onChangeCourse(course){
    course.name = 'course5';
    course.id = '5';
  }
}


