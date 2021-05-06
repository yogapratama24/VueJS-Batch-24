var readBooks = require('./callback.js')

var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]

  // const getPosts = () => {
  //   setTimeout(() => {
  //     books.forEach(post => {
  //       return post
  //     })
  //   }, 1000)
  // }

const time = 10000
readBooks(time, books[0], (response) => {
  readBooks(response, books[1], (response2) => {
    readBooks(response2, books[2], (response3) => {
      readBooks(response3, books[3], (response4) => {
        return
      })
    })
  })
});
