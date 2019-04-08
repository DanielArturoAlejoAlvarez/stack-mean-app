import { Injectable } from '@angular/core';
//my imports
import { HttpClient } from '@angular/common/http'
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  selectedPost: Post
  posts: Post[] //saved our posts (Array)
  
  readonly URL_API="http://127.0.0.1:5000/api/posts"

  constructor(private _httpClient: HttpClient){ 
    this.selectedPost=new Post() // Create a post by default (Instance model Post)
  }

  
  createPost(post: Post){
    return this._httpClient.post(this.URL_API, post)
  }

  readPosts(){
    return this._httpClient.get(this.URL_API)
  }

  updatePost(post: Post){
    return this._httpClient.put(this.URL_API + `/${post._id}`, post)
  }

  deletePost(_id: string){
    return this._httpClient.delete(this.URL_API + `/${_id}`)
  }

  

}
