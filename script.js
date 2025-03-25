async function fetchPlayers() {
    try {
        console.log("Fetching players..."); // Debugging

        let response = await fetch("https://api.cricapi.com/v1/players?apikey=6fa864a2-723b-420b-8151-5210b1d2b69d");  // Replace with your actual API key
        let data = await response.json();

        console.log("API Response:", data); // 👀 Check API response

        let playerList = document.getElementById("player-list");
        playerList.innerHTML = ""; // Clear old data

        if (data.status === "success" && data.data && data.data.length > 0) {
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
