// Store the wallet amount to your local storage with key "amount"
function updateWallet() {
    let amount = JSON.parse(localStorage.getItem('amount')) || 0;
    let wallet = document.getElementById('wallet');
    wallet.innerText = amount;
  }
  updateWallet();
  function addToWallet() {
    let wallet = JSON.parse(localStorage.getItem('amount')) || 0;
    let amount = document.getElementById("amount").value;
    let x = Number(wallet) + Number(amount);
    localStorage.setItem("amount", JSON.stringify(x));
    updateWallet();
  }


  let book_movies = document.getElementById("book_movies");
  book_movies.addEventListener("click", goToBookMovies);
  function goToBookMovies() {
    window.location.href = 'movies.html'
  }