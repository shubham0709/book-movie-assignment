// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let amount = JSON.parse(localStorage.getItem('amount')) || 0;
let wallet = document.getElementById('wallet');
wallet.innerText = amount;
const API = "90d2ea3a";

let id;
let main = (myfunc, delay) => {
  if (id) {
    clearTimeout(id);
  }
  id = setTimeout(function () {
    myfunc();
  }, delay)
}

async function searchMovies() {
  try {
    let movie = document.getElementById('search').value;
    const url = `http://www.omdbapi.com/?apikey=90d2ea3a&s=${movie}`
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.Search);
    if (data.Search) {
      appendMovies(data.Search);
    }

  } catch (err) {
    console.log("its my error :  " + err);
  }
}


appendMovies = (arr) => {
  let moviesDiv = document.getElementById("movies");
  moviesDiv.innerHTML = null;
  console.log("calling append movies");

  arr.map((elem, index) => {
    let card = document.createElement("div")
    card.setAttribute("class", "card");

    let img = document.createElement("img");
    let title = document.createElement("h2");
    let bookNow = document.createElement("button");

    bookNow.setAttribute("class", "book_now");
    bookNow.innerText = "Book Now"
    bookNow.addEventListener("click", function () {
      console.log("booking started : " + title);
      bookMyMovie(elem, index);
    })

    img.src = elem.Poster;
    title.innerText = elem.Title;

    moviesDiv.append(card);
    card.append(img, title, bookNow);
  })
}

let bookMyMovie = (elem) => {
  console.log("booking bro!!");
  localStorage.setItem("movie",JSON.stringify(elem));
  window.location.href = "checkout.html";
}
