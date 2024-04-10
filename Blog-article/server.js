const express = require('express');
const app = express();
const articlesRouter = require('./routes/articles');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blog');

app.set('view engine', 'ejs')

app.use('/articles', articlesRouter)

app.get('/', (req, res) => {
    const articles = [{
        title: 'Article 1',
        createdAt: new Date(),
        description: 'Description of article 1'
    }, {
        title: 'Article 2',
        createdAt: new Date(),
        description: 'Description of article 2'

    }]

    res.render('articles/index' ,{ articles: articles});
});

app.listen(5000, () => {
  console.log('server started');
});