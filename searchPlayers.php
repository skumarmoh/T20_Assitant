<?php
// searchPlayers.php
header("Content-Type: application/json");

// CricAPI Key
$apiKey = "359f174e-a477-4040-a65c-e98f87ea0ed4";

// Check if 'name' parameter exists
if (isset($_GET['name'])) {
    $playerName = urlencode($_GET['name']);
    $apiUrl = "https://cricapi.com/api/playerFinder?apikey=$apiKey&name=$playerName";

    // Fetch data from CricAPI
    $response = file_get_contents($apiUrl);
    if ($response === FALSE) {
        echo json_encode(["error" => "Failed to fetch data from API"]);
        exit;
    }

    echo $response; // Return data to the frontend
} else {
    echo json_encode(["error" => "Missing 'name' query parameter"]);
}
?>
