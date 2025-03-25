<?php
// fetchPlayers.php
header("Content-Type: application/json");

// CricAPI Key
$apiKey = "359f174e-a477-4040-a65c-e98f87ea0ed4";

// API URL
$apiUrl = "https://cricapi.com/api/playerFinder?apikey=$apiKey";

// Get the player name from query string
if (isset($_GET['name'])) {
    $playerName = urlencode($_GET['name']);
    $url = "$apiUrl&name=$playerName";

    // Fetch data from CricAPI
    $response = file_get_contents($url);
    if ($response === FALSE) {
        echo json_encode(["error" => "Unable to fetch data from API"]);
        exit;
    }

    echo $response; // Return response to the frontend
} else {
    echo json_encode(["error" => "Missing 'name' query parameter"]);
}
?>
