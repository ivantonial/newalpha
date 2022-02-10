const searchBtnListener = document.getElementById("searchBtn");
const registerBtnListener = document.getElementById("registerBtn");
const defaultServerLink = 'http://localhost:3000';

searchBtnListener.addEventListener("click", newSearch);
registerBtnListener.addEventListener("click", newRegister);


function newRegister() {
    const newGame = document.getElementById("gameName").value;
    const newReleaseYear = document.getElementById("gameReleaseYear").value;
    const newGenre = document.getElementById("gameGenre").value;
    const newMultiplayer = document.getElementById("gameMultiplayer").checked;
    const newOffline = document.getElementById("gameOffline").checked;
    const newCrossPlataform = document.getElementById("gameCrossPlataform").checked;


    fetch(`${defaultServerLink}/databaseGame`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify([{ "game": newGame, "year": newReleaseYear, "genre": newGenre, "multiplayer": newMultiplayer, "offline": newOffline, "crossplataform": newCrossPlataform }])
    })


}

function newSearch() {
    fetch(`${defaultServerLink}/databaseGame`)
        .then(response => response.json())
        .then(found => {
            console.log(found)
            document.getElementById('content').innerHTML = '';
            found.forEach(element => {
                document.getElementById('content').innerHTML += '<tr><td>' + element.game + '</td><td>' + element.year + '</td><td>' + element.genre + '</td><td>' + element.multiplayer + '</td><td>' + element.offline + '</td><td>' + element.crossplataform + '</td></tr>';
            });
        })
}