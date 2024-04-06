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


//declaration of movie posters from the 10 movies. 
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


//this is an array of strings that displays 10 movies. 
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


//this is an array of strings that displays movie trailers from the 10 movies. 
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

//this is an array of strings that displays a brief description of each movie. 
const descriptions = [
    "A teenager becomes a major competitor in the world of drift racing after moving in with his father in Tokyo to avoid a jail sentence in America.",
    "It follows the life of J. Robert Oppenheimer, the American theoretical physicist who helped develop the first nuclear weapons during World War II.",
    "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    "In a simulated reality, humans are kept sedated, living virtually. Neo wakes up on Morpheus's ship, learning he's the one who can change everything.",
    "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
    "It ollows a poor family who infiltrate the life of a wealthy family..",
    "Thanos seeks to wield the six Infinity Stones, aiming to impose his will on reality. The Avengers face their greatest challenge as the fate of the planet hangs in the balance.",
    "Marty travels back in time, meets his parents, and ensures their love to exist. He also saves Doc Brown's life before returning to his time.",
    "A small-time boxer who works as a collector for a loan shark and fights in sleazy clubs for low pay. His gym trainer, Mickey Goldmill (Burgess Meredith), thinks little of Balboa's potential.",
    "Sing, a loser aspiring to join the Axe Gang in 1940s Shanghai, fails to extort the residents of Pig Sty Alley, a rundown slum."
];


//this function adds cards to the page to display the data in the array
function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");
    
    for (let i = 0; i < titles.length; ++i) {
        let title = titles[i];
        let imageURL = "";
        let trailerURL = movieURLs[i];
        let description = descriptions[i]; //gets description for each movie

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
                break;
        }

        const nextCard = templateCard.cloneNode(true);
        editCardContent(nextCard, title, imageURL, description); //passes the description to editCardContent
        
        const anchorTag = document.createElement("a");
        anchorTag.href = trailerURL;
        anchorTag.appendChild(nextCard);
        cardContainer.appendChild(anchorTag);
    }
}

function editCardContent(card, newTitle, newImageURL, description) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = newTitle;

    const cardImage = card.querySelector("img");
    cardImage.src = newImageURL;
    cardImage.alt = newTitle + " Poster";

    const cardDescription = card.querySelector(".description"); 
    cardDescription.textContent = description; //sets a description for each movie

    console.log("new card:", newTitle, "- html: ", card);
}


document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
    //this is an array of strings for famous quotes for movies.
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
		
    ];

    //this generates random quotes from the array above. 
    var randomIndex = Math.floor(Math.random() * quotes.length);

    //this displays the randomized movie quote from the array above. 
    alert("Click for a randomized quote from the top 10 movies.\n\n" + quotes[randomIndex]);
}

//this function displays a message that lets the user know what to do with the posters. 
function info() {
    
    alert("Click on a movie poster to watch its official trailer.");

}

//this function removes the last movie from the list 
function removeLastCard() {
    titles.pop(); // Remove last item in titles array
    showCards(); // Call showCards again to refresh
}

//this function restores/add previous movie from the list. 
function addCard(prevTitle) {
    //limit the number of pushes to 10
    if (titles.length < 10) {
        //add the new title to the titles array
        titles.push(prevTitle);
        
        showCards();
    } else {
        console.log();
    }
}

//this function dipslays a message that tells the user to fill out the survey that is on their right. 
function survey() {
	
	alert("Fill out the movie survey that's on your right. This helps me know more about you :) ");
	
}
 
