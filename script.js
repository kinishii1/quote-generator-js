let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");
const url = "https://api.quotable.io/random";

const getQuote = () => {
  fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(data);
    quote.textContent = data.content;
    author.textContent = data.author;
  })
}

btn.addEventListener('click',()=>{
  getQuote()
})