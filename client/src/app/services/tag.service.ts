import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Tag } from '../models/tag';


@Injectable({
  providedIn: 'root'
})
export class TagService {

  selectedTag: Tag
  tags: Tag[]
  readonly URL_API="http://127.0.0.1:5000/api/tags"

  constructor(private _httpClient: HttpClient){ 
    this.selectedTag=new Tag()
  }

  createTag(tag: Tag){
    return this._httpClient.post(this.URL_API, tag)
  }

  readTags(){
    return this._httpClient.get(this.URL_API)
  }

  updateTag(tag: Tag){
    return this._httpClient.put(this.URL_API + `/${tag._id}`, tag)
  }

  deleteTag(_id: string){
    return this._httpClient.delete(this.URL_API + `/${_id}`)
  }

}
