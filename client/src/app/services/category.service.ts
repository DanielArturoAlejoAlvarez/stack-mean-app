import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  selectedCategory: Category
  categories: Category[]
  
  readonly URL_API="http://127.0.0.1:5000/api/categories"

  constructor(private _httpClient: HttpClient){ 
    this.selectedCategory=new Category()
  }

  createCategory(category: Category){
    return this._httpClient.post(this.URL_API, category)
  }

  readCategories(){
    return this._httpClient.get(this.URL_API)
  }

  updateCategory(category: Category){
    return this._httpClient.put(this.URL_API + `/${category._id}`, category)
  }

  deleteCategory(_id: string){
    return this._httpClient.delete(this.URL_API + `/${_id}`)
  }

}
