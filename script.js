async function fetchPlayers() {
    try {
        let response = await fetch("https://api.cricapi.com/v1/players?apikey=YOUR_API_KEY"); // Replace with your API key
        let data = await response.json();

        let playerList = document.getElementById("player-list");
        playerList.innerHTML = ""; // Clear previous results

        if (data.status === "success" && data.data.length > 0) {
            data.data.forEach(player => {
                let li = document.createElement("li");
                li.textContent = `${player.name} - ${player.country}`;
                playerList.appendChild(li);
            });
        } else {
            playerList.innerHTML = "<li>No player data available.</li>";
        }
    } catch (error) {
        console.error("Error fetching players:", error);
        document.getElementById("player-list").innerHTML = "<li>Failed to load data. Check API key.</li>";
    }
}
