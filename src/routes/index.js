const { CtrlPost }=require('../controllers/posts')
const { CtrlCategory }=require('../controllers/categories')
const { CtrlTag }=require('../controllers/tags')

module.exports=(app)=>{
    app.get('/api/posts', CtrlPost.index)

    app.post('/api/posts', CtrlPost.store)

    app.get('/api/posts/:postId', CtrlPost.show)

    app.put('/api/posts/:postId', CtrlPost.update)

    app.patch('/api/posts/:postId', CtrlPost.patch)

    app.delete('/api/posts/:postId', CtrlPost.destroy)

   

    app.get('/api/posts/:postId/tags', CtrlPost.getByTag)
    app.post('/api/posts/:postId/tags', CtrlPost.postByTags)

    app.get('/api/categories', CtrlCategory.index)

    app.post('/api/categories', CtrlCategory.store)

    app.get('/api/categories/:categoryId', CtrlCategory.show)

    app.put('/api/categories/:categoryId', CtrlCategory.update)

    app.patch('/api/categories/:categoryId', CtrlCategory.patch)

    app.delete('/api/categories/:categoryId', CtrlCategory.destroy)


    app.get('/api/tags', CtrlTag.index)

    app.post('/api/tags', CtrlTag.store)

    app.get('/api/tags/:tagId', CtrlTag.show)

    app.put('/api/tags/:tagId', CtrlTag.update)

    app.patch('/api/tags/:tagId', CtrlTag.patch)

    app.delete('/api/tags/:tagId', CtrlTag.destroy)
}



