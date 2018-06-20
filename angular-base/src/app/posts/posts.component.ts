import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { PostService } from './../services/post.service';
import { Component, OnInit } from "@angular/core";
import { BadInput } from '../common/bad-input';

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})
export class PostsComponent implements OnInit {
  posts: any[];
  constructor(private postService: PostService) {

  }
  createPost(inputTitle:  HTMLInputElement) {
    let post = {title : inputTitle.value};
    this.posts.unshift(post);

    input.value = '';
    
    this.postService.create(post)
    .subscribe(created_post => {
      // console.log(response);
      // console.log(created_post);
      post['id'] = created_post.id;
    },(error:AppError) => {
      // Rollback the changes if something bad happens
      this.posts.splice(0,1);
      if(error instanceof BadInput){
        // this.form.setErrors(error.originalError);
        // Expected and unexpected errors are handled this way
      }
      else{
         throw error;
        //  Throw the err here so it will be
        // handled by the global error handler
      }
     
    })
  }
  onUpdatePost(post) {
      this.postService.update(post)
      .subscribe(
        updated_post => {
        // console.log(response.json());
        post.id = updated_post.id;
        });
  }
  onDeletePost(post) {
    // http delete request to delete a resource from the server
    // this.posts.splice(this.posts.indexOf(post), 1);

    // this.postService.delete(post.id)
    // .subscribe(null,(error: AppError) => {
    //   //In error case rollback the changes
    //   this.posts.splice(this.posts.indexOf(post),0,1);
    //   if(error instanceof NotFoundError){
    //     alert('This post has already been deleted');
    //   }else{
    //    throw error;
    //   //  Throw the error so it will be captured by
    //   // the global error handler
    //   }
    // });
    // You have to call the subscribe method
    // only then the service will call the backend
    // Observables are lazy(nothing happens until
    // you subscribe to them)Promises are eager

    // CONVERTING PROMISES TO OBSERVABLES
    //PROMISES DON'T HAVE THE SUBSCRIBE METHOD
    //An observable can be converted to a promise
    //by using the toPromise method of the rxjs/operator/add/toPromise
    this.postService.delete(post.id);
  }
  ngOnInit() {
    // All async calls should be preferred during the lifecycle of
    // the component.
    // Angular will call the appropriate lifecycle hooks
    // if they are defined, Creates a component, renders it
    //creates and renders its children, destroys a component
    //SIDE EFFECTS GOES HERE
    this.postService.getAll()
    .subscribe(posts => this.posts = posts);
  }
}

// OPTIMISTIC AND PESSIMISTC UPDATES CONCEPT

// OPTIMISTIC meaning is Hopeful (assuming call to server will success.If it assumes,will rollback the changes)
// Pessimistic meaning Hopeless (assuming call to server
// will fail)
