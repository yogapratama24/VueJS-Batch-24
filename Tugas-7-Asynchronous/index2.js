var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]

const createPost = book => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        books.push(book)
        const error = false
        if(!error) {
          resolve()
        }else{
          reject()
        }
      }, 2000)
    })
  }

  readBooksPromise(10000, createPost(books))