<?php
    file_exists("class.php") ? include "class.php" : include "../class.php";
    if ($_SERVER['REMOTE_ADDR'] == "::1") {
        DB::$user = "root";
        DB::$password = "";
        DB::$dbName = "unifiers";
    } else {
        DB::$user = "";
        DB::$password = "";
        DB::$dbName = "";
    }
    $results = DB::query("SELECT DISTINCT category FROM products");
    echo '<span class="header-category-link link" onclick="loadProducts(\'all\')">All</span>';
    foreach ($results as $row) {
        echo "<span class='header-category-link link' onclick='loadProducts(\"" . $row["category"] . "\")'>";
            echo $row["category"];
        echo "</span>";
    }
?>
