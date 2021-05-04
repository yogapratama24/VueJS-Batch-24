var readBooks = require('./callback.js')

var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]
const b = (book) => {
    setTimeout(() => {
        for(i = 0; i < book.length; i++){
        console.log(book[i]);
        }
    }, 1000)
  }

  const getPosts = () => {
    setTimeout(() => {
      books.forEach(post => {
        return post
      })
    }, 1000)
  }


readBooks(10000, ...books, getPosts);
