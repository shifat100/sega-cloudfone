<?php

/**
 * Configuration
 * ----------------------
 */
// The directory where your ROMs are stored (relative to this script)
$romDirectory = 'rom'; 

// The name of the javascript file to generate
$outputFile = 'init.js';

// Allowed file extensions
$allowedExtensions = ['sms', 'gg', 'bin'];


/**
 * Logic
 * ----------------------
 */
$romData = [];

// 1. Check if directory exists
if (!is_dir($romDirectory)) {
    die("Error: The directory '$romDirectory' does not exist. Please create it and add subfolders with ROMs.");
}

// 2. Get all subdirectories (Categories)
$directories = glob($romDirectory . '/*', GLOB_ONLYDIR);

foreach ($directories as $dirPath) {
    // Get the folder name to serve as the Category Name (e.g., "rom/action" -> "Action")
    $folderName = basename($dirPath);
    
    // Format the category name: replace underscores/dashes with spaces and Capitalize
    // Example: "homebrew_games" becomes "Homebrew Games"
    $categoryName = ucwords(str_replace(['_', '-'], ' ', $folderName));
    
    // Initialize the category array
    $romData[$categoryName] = [];
    
    // Scan files inside this directory
    $files = scandir($dirPath);
    
    foreach ($files as $file) {
        $filePath = $dirPath . '/' . $file;
        
        // Skip directories and check extension
        if (is_file($filePath)) {
            $extension = strtolower(pathinfo($file, PATHINFO_EXTENSION));
            
            if (in_array($extension, $allowedExtensions)) {
                // Format the ROM name: "alex_kidd.sms" -> "Alex Kidd"
                $rawName = pathinfo($file, PATHINFO_FILENAME);
                $cleanName = ucwords(str_replace(['_', '-'], ' ', $rawName));
                
                // Add to our data structure
                // We use $filePath as the URL
                $romData[$categoryName][] = [
                    'name' => $cleanName,
                    'url'  => $filePath
                ];
            }
        }
    }
    
    // If a category has no valid ROMs, remove it
    if (empty($romData[$categoryName])) {
        unset($romData[$categoryName]);
    }
}

/**
 * Generate the JavaScript Content
 * ----------------------
 */

// Convert PHP array to JSON formatted string
// JSON_PRETTY_PRINT makes it readable
// JSON_UNESCAPED_SLASHES prevents paths like "rom\/action"
$jsonOutput = json_encode($romData, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);

$jsContent = <<<JS
'use strict';

// 1. Initialize JSSMS
// We pass JSSMS.KaiOSUI as the constructor (without 'new').
// JSSMS will call 'new ui(this)' internally.
var sms = new JSSMS({
  'ui': JSSMS.KaiOSUI,
  'soundEnabled': true
});

// 2. Configure ROMs with categories
// The UI expects this specific structure: an object where keys are category names
// and values are arrays of objects, with each object having 'name' and 'url' properties.
sms.ui.setRoms($jsonOutput);
JS;

/**
 * Save the file
 * ----------------------
 */
if (file_put_contents($outputFile, $jsContent)) {
    echo "<h1>Success!</h1>";
    echo "<p>Generated <strong>$outputFile</strong> based on the contents of the <strong>$romDirectory</strong> folder.</p>";
    echo "<pre>" . htmlspecialchars($jsContent) . "</pre>";
} else {
    echo "Error: Could not write to $outputFile. Check permissions.";
}
?>