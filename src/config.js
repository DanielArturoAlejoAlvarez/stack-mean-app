module.exports={
    port: process.env.PORT || 5000,
    dbUrl: process.env.MONGO_URI || 'mongodb://127.0.0.1/stackmeandb',
    urlBase: process.env.URL_BASE || 'http://127.0.0.1:4200',
}