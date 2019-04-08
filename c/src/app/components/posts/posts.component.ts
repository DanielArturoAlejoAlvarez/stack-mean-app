import { Component, OnInit } from '@angular/core';
//Services
import { PostService } from '../../services/post.service'
import { CategoryService } from '../../services/category.service'
import { TagService } from '../../services/tag.service'

import { NgForm } from '@angular/forms';
import { Post } from 'src/app/models/post';
import { Category } from 'src/app/models/category';
import { Tag } from 'src/app/models/tag'
//toastr
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  providers: []
})
export class PostsComponent implements OnInit {
  titleAction: string
  toggleBtn: string

  




 
  constructor(private _tagService: TagService, private _categoryService: CategoryService, private _postService: PostService, private _toastrService: ToastrService){ 
    
  }

  ngOnInit() {
    
    
    this.getCategories()
    this.getPosts()
    this.getTags()
    this.titleAction="NEW POST"
    this.toggleBtn="CREATE"    
  }

  getCategories(){
    this._categoryService.readCategories()
      .subscribe(res=>{
        this._categoryService.categories=res as Category[]
        console.log(res)
      })
  }

  

  getTags(){
    this._tagService.readTags()
      .subscribe(res=>{
        this._tagService.tags=res as Tag[]
        console.log(res)
      })
  }

  

  addPost(form: NgForm){
    //console.log(form.value)
   
    if(form.value._id){
      this._postService.updatePost(form.value)
      .subscribe(res=>{
        this.resetForm(form)
        this._toastrService.success('Success:','Post updated successfully!')
        this.titleAction="NEW POST"
        this.toggleBtn="CREATE"
        this.getPosts()
      })
    }else{
      this._postService.createPost(form.value)
      .subscribe(res=>{
        //console.log(res)
        this.resetForm(form)
        this._toastrService.success('Success:','Post saved successfully!')
        this.getPosts()
      })
    }   
  }

  editPost(post: Post){     
    this._postService.selectedPost=post 

    
       
    this.titleAction="EDIT POST"
    this.toggleBtn="UPDATE"    
  }

  getPosts(){        
    this._postService.readPosts()
      .subscribe(res=>{
        this._postService.posts=res as Post[] // Array of posts from PostService
        console.log(res)
      })
  }

  removePost(_id: string){
    if(confirm('Are you sure?')){
      this._postService.deletePost(_id)
      .subscribe(res=>{
        this._toastrService.success('Success:','Post deleted successfully!')
        this.getPosts()
      })
    }   
  }

  resetForm(form?: NgForm){
   if(form){
    form.reset()
    this._postService.selectedPost=new Post()
   }
  }

}

/*
this.toastrService.error('everything is broken', 'Major Error', {
  timeOut: 3000
});
*/
