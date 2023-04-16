const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.querySelector("span.loader");

// Show Loading
function loading() {
  loader.classList.remove("hide");
  quoteContainer.classList.add("hide");
}

// Hide Loading
function complete() {
  loader.classList.add("hide");       //hide loader
  quoteContainer.classList.remove("hide");  //show the quoteContainer
}

let apiQuotes = [];

// Show New Quote
function newQuote() {
  // Pick a random quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
//  console.log(quote);                                //qupte is an objext with author and text content

//we can use if else conditon, ternary operator or simply OR condition for author null case

  // if(!quote.author) {
  //   authorText.textContent = "Unknown";
  // }
  // else{
  //   authorText.textContent = quote.author;
  // }

  // authorText.textContent = quote.author ? quote.author : "Unknown";

  // Check if Author field is blank and replace it with 'Unkown'
  authorText.textContent = quote.author || "Unknown";

  // Check if Quote length is long. If yes, apply .long-quote which reduces the font-size
  if (quote.text.length > 120) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  quoteText.textContent = quote.text;
}

// Get Quotes from API
async function getQuotes() {                                   //arrow function: const getQuotes = async () =>{} IIFW: (aynsc ()=> {})()
  loading();
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
    complete();
  } catch (error) {
    // Catch error here
  }
}

// Tweet Quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, "_blank");     //window.open used to open twitterUrl in curretn tab but that_blank will open this url in new tab 
}

// Event Listeners
newQuoteBtn.addEventListener("click", newQuote);        //bcoz we already got all wyotes in the first go in an array named apiQuotes so we can directly tkae from there no need to call an api again.
twitterBtn.addEventListener("click", tweetQuote);

// On load
getQuotes();



// Get Request  A GET request, in simple terms, is a way for you to grab data from a data source with the help of the internet. It's done using the GET request method, which is a very common HTTP request method (like POST, PUT, or DELETE).
// like we searched soap on amazon ,means we sending a request to the backend to show us the result of soaps. so whenerver we try to  get any result back from backend and dont want to store in the backend or with in the database just want to get back some data ..and tahta type of rewuest called get rewuest / http reuest . every request pn inter net s http request.
// so get request is when we try get back some data from the database or backend.   

// Post Request  A POST request, in simple terms, is a way for you to send data to a destination with the help of the internet. It's done using the POST request method, which is a very common HTTP request method (like GET, PUT, or DELETE).

// like login then sharew phone no otp thtat validate in backend or we comment on instagram  then what happens is that the text will go the backedend   and backedn will stoer this as commment  in the database.A
// the rwquest where we sending the data to the bacnkedn taht called as post request .
// post req is something whenevr we try to post any new data to the backned.   
// like to do list wheeer wr create a new to do it will store in backedn so everytine we create a new todo it will be saved in the backend database
//  so wahtver uh want to send to  the backedn  it has to be store in the database tahts  called post request.

// doub =t loader and complete an=understood in quoteContainer.classList.add("hide") we add or remove the loader but why add reove in loader whats the importance
// ehy removing at first place from loader as it wasnt added there