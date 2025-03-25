async function fetchPlayers() {
    try {
        console.log("Fetching players...");

        let response = await fetch("https://api.cricapi.com/v1/players?apikey=6fa864a2-723b-420b-8151-5210b1d2b69d"); // Replace with actual API key
        let data = await response.json();

        console.log("API Response:", data);

        let battersList = document.getElementById("batters-list");
        let bowlersList = document.getElementById("bowlers-list");

        // Clear old data
        battersList.innerHTML = "";
        bowlersList.innerHTML = "";

        if (data.status === "success" && data.data && data.data.length > 0) {
            data.data.forEach(player => {
                let li = document.createElement("li");
                li.textContent = `${player.name} - ${player.country}`;

                // Categorizing players based on their role
                if (player.role && player.role.toLowerCase().includes("batsman")) {
                    battersList.appendChild(li);
                } else if (player.role && player.role.toLowerCase().includes("bowler")) {
                    bowlersList.appendChild(li);
                }
            });
        } else {
            battersList.innerHTML = "<li>No batters found.</li>";
            bowlersList.innerHTML = "<li>No bowlers found.</li>";
        }
    } catch (error) {
        console.error("Error fetching players:", error);
        document.getElementById("batters-list").innerHTML = "<li>Failed to load data.</li>";
        document.getElementById("bowlers-list").innerHTML = "<li>Failed to load data.</li>";
    }
}
