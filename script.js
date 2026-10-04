```javascript
// ================================
// GAME HUB JAVASCRIPT
// ================================


// PLAY GAME
function playGame(gameName) {

    alert(
        "🎮 " + gameName +
        "\n\nThis game will be playable soon! 🔥"
    );

}


// MULTIPLAYER
function openMultiplayer() {

    alert(
        "👥 MULTIPLAYER\n\n" +
        "Multiplayer system is coming soon! 🔥\n\n" +
        "Soon you will be able to create a room " +
        "and play with your friends."
    );

}


// PLAY NOW
function scrollToGames() {

    document
        .getElementById("games")
        .scrollIntoView({
            behavior: "smooth"
        });

}


// SEARCH
const searchBox =
    document.getElementById("search");

const gameCards =
    document.querySelectorAll(".game-card");


searchBox.addEventListener(
    "input",
    function () {

        const searchText =
            searchBox.value
                .toLowerCase()
                .trim();


        gameCards.forEach(
            function (card) {

                const gameName =
                    card
                        .querySelector("h3")
                        .innerText
                        .toLowerCase();


                const gameType =
                    card
                        .querySelector("p")
                        .innerText
                        .toLowerCase();


                if (
                    gameName.includes(searchText) ||
                    gameType.includes(searchText)
                ) {

                    card.style.display = "block";

                } else {

                    card.style.display = "none";

                }

            }
        );

    }
);
```
