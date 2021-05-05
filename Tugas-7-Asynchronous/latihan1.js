const posts = [
    {
      title: "Post one",
      body: "This is post one"
    },
    {
      title: "Post two",
      body: "This is post two"
    }
  ]
  
//   const createPost = (post , callback)=> {
//     setTimeout(() => {
//       posts.push(post)
  
//       callback()
//     }, 2000)
//   }
  
//   const getPosts = () => {
//     setTimeout(() => {
//       posts.forEach(post => {
//         console.log(post)
//       })
//     }, 1000)
//   }
  
  const editPost = (idPost , data, callback) => {
      setTimeout(() => {
          let data_edit = posts[idPost]
          data_edit.title = data.title
          data_edit.body = data.body
          callback()
      }, 3000)
  }
  
  const showPost = idPost  => {
      setTimeout(() => {
          console.log(posts[idPost])  
      }, 1000)
  }
  
  const newPost = {
    title: "Post three",
    body: "This is post three"
  }

const idEdit = 1
editPost(idEdit, newPost, () => {
    showPost(1)
})
// showPost(0)