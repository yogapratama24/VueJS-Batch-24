var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]

  const time = 10000
  // readBooksPromise(time, books[0])
  //   .then((response) => {
  //     readBooksPromise(response, books[1])
  //       .then((response2) => {
  //         readBooksPromise(response2, books[2])
  //           .then((response3) => {
  //             readBooksPromise(response3, books[3])
  //               .then((response4) => {
  //                 return response4
  //               })
  //               .catch((err) => {
  //                 console.log("error terus");
  //               })
  //           })
  //           .catch((err) => {
  //             console.log("error lagi yaa");
  //           })
  //       })
  //       .catch((err) => {
  //         console.log("error lagi");
  //       })
  //   })
  //   .catch((err) => {
  //     console.log("error yaa");
  //   })

    // terjadi callback, makan gunakan async await
    const exec = async() => {
      let response1 = await readBooksPromise(time, books[0])
      let response2 = await readBooksPromise(response1, books[1])
      let response3 = await readBooksPromise(response2, books[2])
      let response4 = await readBooksPromise(response3, books[3])
      return response4
    }
    exec()
