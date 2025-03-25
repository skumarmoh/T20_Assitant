async function fetchPlayers() {
    let response = await fetch("https://api.cricbuzz.com/live/match-players"); // Replace with real API
    let data = await response.json();

    let playerList = document.getElementById("player-list");
    playerList.innerHTML = "";

    data.players.forEach(player => {
        let li = document.createElement("li");
        li.textContent = `${player.name} - ${player.role}`;
        playerList.appendChild(li);
    });
}
