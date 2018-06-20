import { Injectable } from '@angular/core';

@Injectable()
export class CoursesService {
    getCourses(){
        return ["course1", "course2", "course3"];

    }
}