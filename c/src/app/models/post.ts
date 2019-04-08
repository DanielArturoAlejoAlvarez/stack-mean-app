
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
