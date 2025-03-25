<?php
header("Content-Type: application/json");  // Set header for JSON response

$apiKey = "359f174e-a477-4040-a65c-e98f87ea0ed4";  // Your updated API key
$url = "https://api.cricapi.com/v1/players?apikey=" . $apiKey;

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); 
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Accept: application/json']);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

// Check response and return JSON data
if ($httpCode == 200) {
    echo $response; 
} else {
    echo json_encode(["status" => "error", "message" => "API request failed", "code" => $httpCode]);
}
?>
