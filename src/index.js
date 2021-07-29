// write your code here
const imageURL = 'http://localhost:3000/images/1'
const commentsURL = 'http://localhost:3000/comments'

const likes = document.querySelector('#fg-likes')
const likeButton = document.querySelector('#fg-like-button')
let counter = 0

const postButton = document.querySelector('.comment-button')
const commentBar = document.querySelector('.comment-input')

commentBar.innerText = 'Hello'

console.log(postButton)
console.log(commentBar)
console.log(commentBar.value)

fetch(imageURL)
.then(resp => resp.json())
.then(image => {
    loadImgInfo(image)
    loadComments(image.comments)
    clickLike()
    clickPost()
})



function loadImgInfo(image) {
    const title = document.querySelector('#fg-title')
    const imgContainer = document.querySelector('#fg-image')
    imgContainer.src = image.image
    title.innerText = image.title    
}

function loadComments(comments) {
    const commentForm = document.querySelector('#fg-comments')
    commentForm.innerHTML = ''
    comments.forEach(comment => {
        const commentLi = document.createElement('li')
        commentLi.innerText = comment.content
        commentForm.append(commentLi)
    })
}

function clickLike() {
    likeButton.addEventListener('click', () => {
        increaseLike()
    })
}

function increaseLike() {
    counter += 1
    likes.innerText = `${counter} likes`
}

function clickPost() {
    postButton.addEventListener('click', () => {

        addComment()
    })
}

function addComment() {
    const commentForm = document.querySelector('#fg-comments')
    const commentLi = document.createElement('li')
    commentLi.innerText = commentBar.innerText
    commentForm.append(commentLi)
}
