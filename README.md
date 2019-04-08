# STACK-MEAN-APP
## Description

This Software of Application with MongoDB, Express, Angular and NodeJS.

## Installation
Using NodeJS, Typescript.

## Technology
Using CORS, SASS, MONGOOSE, MORGAN, NGX-TOASTR, etc

## Usage
```html
$ git clone https://github.com/DanielArturoAlejoAlvarez/stack-mean-app.git [NAME APP] 

$ npm install (Server — NODE)

$ npm start

$ cd client (Client — ANGULAR)

$ npm install

$ ng serve
```
Follow the following steps and you're good to go! Important:


![alt text](https://media.giphy.com/media/nqV6bYG1LbkA0/giphy.gif)


## Coding SERVER

### CONTROLLERS

```javascript
...
module.exports.CtrlPost={    
    index: async (req,res)=>{               
        const posts=await Post.find({}).populate('category','name').populate('tags','name').exec()          
        res.json(posts)    
    },
    store: async (req,res)=>{        
        const mycat=await Category.findOne({name:req.body.category})
        const mytag=await Tag.find({name: req.body.tags})
        
        const newPost=new Post({
            title: req.body.title,
            desc: req.body.desc,
            picture: req.body.picture,
            category: mycat,
            tags: mytag,
            state: req.body.state
        })
                
        const post=await newPost.save()
        res.json({
            status: true,
            msg: 'Post saved successfully!',
            post
        })
    },
...
```

### MODELS

```javascript
...
const PostSchema=new Schema({
    title: {type: String, required: true},
    desc: String,
    picture: String,
    category: {type: Schema.Types.ObjectId, ref: 'Category'},
    tags: [{type: Schema.Types.ObjectId, ref: 'Tag'}],
    state: Boolean,
    dateRegister: {type: Date, default: Date.now()}
})
...
```

### ROUTES 

```javascript
...
module.exports=(app)=>{
    app.get('/api/posts', CtrlPost.index)

    app.post('/api/posts', CtrlPost.store)

    app.get('/api/posts/:postId', CtrlPost.show)

    app.put('/api/posts/:postId', CtrlPost.update)

    app.patch('/api/posts/:postId', CtrlPost.patch)

    app.delete('/api/posts/:postId', CtrlPost.destroy)

...
```

## Coding CLIENT

### COMPONENTS

```typescript
...
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
...
```

### MODELS 

```typescript
...
export class Post {
    constructor(_id='', title='', desc='', picture='', category='languages', tags=[], state=false){
        this._id=_id;
        this.title=title;
        this.desc=desc;
        this.picture=picture;
        this.category=category;
        this.tags=tags;
        this.state=state;
    }

    _id: string;
    title: string;
    desc: string;
    picture: string;
    category: string;
    tags: Array<string>;
    state: boolean;
}
...
```

### SERVICES

```typescript
...
selectedPost: Post
  posts: Post[] //saved our posts (Array)
  
  readonly URL_API="http://127.0.0.1:5000/api/posts"

  constructor(private _httpClient: HttpClient){ 
    this.selectedPost=new Post() // Create a post by default (Instance model Post)
  }

  
  createPost(post: Post){
    return this._httpClient.post(this.URL_API, post)
  }
...
```

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/DanielArturoAlejoAlvarez/stack-mean-app. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.


## License

The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
