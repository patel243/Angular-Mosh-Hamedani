import { BadInput } from "./../common/bad-input";
import { NotFoundError } from "./../common/not-found-error";
import { AppError } from "./../common/app-error";
import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
// Import the catch operator from the observables
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
import "rxjs/add/observable/throw";

@Injectable({
  providedIn: "root"
})
export class DataService {
  // private url;

  constructor(private url: string, private http: Http) {}

  getAll() {
    return this.http
      .get(this.url)
      .map(response => response.json())
      .catch(this.handleError);
  }
  //Reactive Programming styling code
  delete(id) {
    return (
      this.http
        .delete(this.url + "/" + id)
        .map(response => response.json())
        // .toPromise()
        .retry(3)
        .catch(this.handleError)
    );
  }
  update(resource) {
    return this.http
      .put(this.url + "/" + resource.id, JSON.stringify({ title: post.title }))
      .map(response => response.json())
      .catch(this.handleError);
  }
  create(resource) {
    return this.http
      .post(this.url, JSON.stringify(resource))
      .map(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    if (error.status === 400) {
      return Observable.throw(new BadInput(error.json()));
    }
    if (error.status === 404) {
      return Observable.throw(new NotFoundError());
    }
    return Observable.throw(new AppError(error.json()));
  }
}

// TAKE AWAYS

// 1.Observables are lazy and nothing
// happens until you subscribe to them
// 2.You can always convert observables to promises;
// (Using the toPromise rxjs extension)
// 3.Prefer Observables.They allow reactive programming
// 4.They provide a bunch of useful operators
// to work with.
