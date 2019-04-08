import { Component, OnInit } from '@angular/core';

import { CategoryService } from '../../services/category.service'
import { Category } from '../../models/category'

import { ToastrService } from 'ngx-toastr'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  providers: []
})
export class CategoriesComponent implements OnInit {

  titleAction: string
  toggleBtn: string

  
  constructor(private _categoryService: CategoryService, private _toastrService: ToastrService) { }

  ngOnInit() {
    this.titleAction="NEW CATEGORY"
    this.toggleBtn="CREATE"
    this.getCategories()
  }

  addCategory(form: NgForm){
    if(form.value._id){
      this._categoryService.updateCategory(form.value)
        .subscribe(res=>{
          this.resetForm(form)
          this._toastrService.success('Success:', 'Category updated successfully!')
          this.titleAction="NEW CATEGORY"
          this.toggleBtn="CREATE"
          this.getCategories()
        })
    }else{
      this._categoryService.createCategory(form.value)
        .subscribe(res=>{
          this.resetForm(form)
          this._toastrService.success('Success:', 'Category saved successfully!')
          this.getCategories()
        })
    }
  }



  getCategories(){
    this._categoryService.readCategories()
      .subscribe(res=>{
        this._categoryService.categories=res as Category[]
        console.log(res)
      })
  }

  editCategory(category: Category){
    
    this._categoryService.selectedCategory=category
    this.titleAction="EDIT CATEGORY"
    this.toggleBtn="UPDATE"
  }

  removeCategory(_id: string){
    if(confirm('Are you sure?')){
      this._categoryService.deleteCategory(_id)
        .subscribe(res=>{
          this._toastrService.success('Success:', 'Category updated successfully!')
          this.getCategories()
        })
    }
  }

  resetForm(form?: NgForm){
    if(form){
      form.reset()
    this._categoryService.selectedCategory=new Category()
    }
  }
  

}
