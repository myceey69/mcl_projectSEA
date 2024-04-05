/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 * 
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your 
 *    browser and make sure you can see that change. 
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 * 
 */



const FAST_AND_FURIOUS_3_POSTER = "https://m.media-amazon.com/images/I/71ql8kIrPKL._AC_UF894,1000_QL80_.jpg";
const OPPENHEIMER_POSTER =  "https://m.media-amazon.com/images/I/71xDtUSyAKL._AC_UF894,1000_QL80_.jpg";
const THE_DARK_KNIGHT_POSTER = "https://m.media-amazon.com/images/I/818hyvdVfvL._AC_UF894,1000_QL80_.jpg"; 
const MATRIX_POSTER = "https://m.media-amazon.com/images/I/71PfZFFz9yL._AC_UF894,1000_QL80_.jpg";
const INTERSTELLAR_POSTER = "https://m.media-amazon.com/images/I/71dN1QYnf+L._AC_UF894,1000_QL80_.jpg"; // Corrected variable name
const PARASITE_POSTER = "https://m.media-amazon.com/images/I/91KArYP03YL._AC_UF894,1000_QL80_.jpg"; 
const AVENGERS_INFINITY_WAR_POSTER = "https://m.media-amazon.com/images/I/91E4iLIWgHL._AC_UF894,1000_QL80_.jpg"; 
const BACK_TO_THE_FUTURE_POSTER = "https://i.ebayimg.com/images/g/Ks4AAOSwiCBgiDga/s-l1200.webp"; 
const ROCKY_POSTER = "https://m.media-amazon.com/images/I/61qNMpgcPfL._AC_UF894,1000_QL80_.jpg"; 
const KUNG_FU_HUSTLE_POSTER = "https://m.media-amazon.com/images/I/71m93EonyZL._AC_UF894,1000_QL80_.jpg";

// This is an array of strings (Movies)
let titles = [
    "Tokyo Drift",
    "Oppenheimer",
    "The Dark Knight",
    "The Matrix",
    "Interstellar",
    "Parasite",
    "Avengers",  
    "Back to the Future",
    "Rocky",
    "Kung Fu Hustle"
];

// Your final submission should have much more data than this, and 
// you should use more than just an array of strings to store it all.

const movieURLs = [
    "https://www.youtube.com/watch?v=p8HQ2JLlc4E",
    "https://www.youtube.com/watch?v=uYPbbksJxIg",
    "https://www.youtube.com/watch?v=EXeTwQWrcwY",
    "https://www.youtube.com/watch?v=vKQi3bBA1y8",
    "https://www.youtube.com/watch?v=zSWdZVtXT7E",
    "https://www.youtube.com/watch?v=5xH0HfJHsaY",
    "https://www.youtube.com/watch?v=6ZfuNTqbHE8",
    "https://www.youtube.com/watch?v=qvsgGtivCgs",
    "https://www.youtube.com/watch?v=-Hk-LYcavrw",
    "https://www.youtube.com/watch?v=FtE9-o6dBEI"
];

// This function adds cards the page to display the data in the array
function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");
    
    for (let i = 0; i < titles.length; ++i) {
        let title = titles[i];
        let imageURL = "";
        let trailerURL = movieURLs[i];

        // Assigning poster URLs based on the index of the movie
        switch (i) {
            case 0:
                imageURL = FAST_AND_FURIOUS_3_POSTER;
                break;
            case 1:
                imageURL = OPPENHEIMER_POSTER;
                break;
            case 2:
                imageURL = THE_DARK_KNIGHT_POSTER;
                break;
            case 3:
                imageURL = MATRIX_POSTER;
                break;
            case 4:
                imageURL = INTERSTELLAR_POSTER;
                break;
            case 5:
                imageURL = PARASITE_POSTER;
                break;
            case 6:
                imageURL = AVENGERS_INFINITY_WAR_POSTER;
                break;
            case 7:
                imageURL = BACK_TO_THE_FUTURE_POSTER;
                break;
            case 8:
                imageURL = ROCKY_POSTER;
                break;
            case 9:
                imageURL = KUNG_FU_HUSTLE_POSTER;
                break;
            default:
                // Handle the case where there's no poster URL provided
                break;
        }

        const nextCard = templateCard.cloneNode(true); // Copy the template card
        editCardContent(nextCard, title, imageURL); // Edit title and image
        
        // Create an anchor tag
        const anchorTag = document.createElement("a");
        anchorTag.href = trailerURL;  // Set the trailer URL
        
        // Append the card to the anchor tag
        anchorTag.appendChild(nextCard);
        
        // Append the anchor tag to the card container
        cardContainer.appendChild(anchorTag); // Add new card to the container
    }
}

function editCardContent(card, newTitle, newImageURL) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = newTitle;

    const cardImage = card.querySelector("img");
    cardImage.src = newImageURL;
    cardImage.alt = newTitle + " Poster";

    // You can use console.log to help you debug!
    // View the output by right clicking on your website,
    // select "Inspect", then click on the "Console" tab
    console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);


function quoteAlert() {
    // Array of quotes
    var quotes = [
        "Fifty percent of something is better than a hundred percent of nothing. \n- Han from Tokyo Drift",
        "Now I Am Become Death, the Destroyer of Worlds. -Oppenheimer",
        "It's not who I am underneath, but what I do that defines me. \n-Bruce Wayne from the Dark Knight",
        "You take the blue pill... the story ends, you wake up in your bed and believe whatever you want to believe. You take the red pill... you stay in Wonderland, and I show you how deep the rabbit hole goes. \n-Morpheus from the Matrix",
        "We're still pioneers, we barely begun. Our greatest accomplishments cannot be behind us, cause our destiny lies above us. \n-Cooper from Interestellar",
        "So, there's no need for a plan. You can't go wrong with no plans. We don't need to make a plan for anything. It doesn't matter what will happen next. \n-Kim Ki-taek from Parasite", 
	"In time, you will know what it's like to lose. To feel so desperately that you're right. Yet to fail all the same. Dread it. \n-Thanos from Avengers: Infinity War",
	"I Guess You Guys Aren't Ready For That Yet. But Your Kids Are Gonna Love It. \n-Marty Mcfly from Back to the Future",
	"It ain't about how hard you hit. It's about how hard you can get hit and keep moving forward; how much you can take and keep moving forward. That's how winning is done! \n-Rocky",
	"I realized then that good guys never win. I want to be bad. I want to be the killer! \n-Sing from Kung Fu Hustle"
		
		// Add more quotes as needed
    ];

    // Generate a random index to select a quote from the array
    var randomIndex = Math.floor(Math.random() * quotes.length);

    // Display the randomly selected quote
    alert("Click for a randomized quote from the top 10 movies.\n\n" + quotes[randomIndex]);
}

//this function displays a message that lets the user know what to do with the posters. 
function info() {
    
    alert("Click on a movie poster to watch its official trailer.");

}


function removeLastCard() {
    titles.pop(); // Remove last item in titles array
    showCards(); // Call showCards again to refresh
}

//this function displays a message that lets the user know that there is a survey on the right. 
function survey() {
	
	alert("Fill the movie survey that's on your right. This helps me know more about you :) ");
	
}

 
