import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';


@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService {

  constructor(http: Http) { 
    super("jsonplaceholder.typicode.com/posts", http);
  }

}
