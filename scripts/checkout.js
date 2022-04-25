// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
function updatewallet() {
    let amount = JSON.parse(localStorage.getItem('amount')) || 0;
    let wallet = document.getElementById('wallet');
    wallet.innerText = amount;
  }
updatewallet();

  let movie = JSON.parse(localStorage.getItem('movie'));
  console.log(movie);

  let img = document.querySelector("img");
  img.src = movie.Poster;

  let h2 = document.querySelector('h2');
  h2.innerText = movie.Title;

  let h3 = document.querySelector('h3');
  h3.innerText = movie.Year;
  /*
    {
      "Title": "Thor",
      "Year": "2011",
      "imdbID": "tt0800369",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"
    }
  */
  let confirmBooking = () => {
    let available = JSON.parse(localStorage.getItem('amount')) || 0;
    let wallet = Number(available);

    let numberOfTickets = document.querySelector("#number_of_seats").value;
    console.log(numberOfTickets);

    let nameOfUser = document.querySelector("#user_name").value;
    console.log(nameOfUser);

    if(numberOfTickets==null || nameOfUser.lenght==0 || nameOfUser==""){
      alert("please enter all the details");
      return;
    }
    if(numberOfTickets == 0 || numberOfTickets==''){
      alert("book atleast one seat");
      return;
    }
    let checkOutAmount = numberOfTickets * 100;

    if (checkOutAmount > wallet) {
      alert("Insufficient Balance!");
    } else {
      alert("Booking successful!");
      let wallet = JSON.parse(localStorage.getItem('amount')) || 0;
      let x = Number(wallet) - checkOutAmount;
      localStorage.setItem("amount", JSON.stringify(x));
      updatewallet();
    }
  }