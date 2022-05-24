const { Schema, model } = require('mongoose')

Author = new Schema({
    name: String
})

Article = new Schema({
    title: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'Author',
    }
})

const ArticleModel = model('Article', Article)
const AuthorModel = model('Author', Author)

module.exports = {
    ArticleModel,
    AuthorModel
}



