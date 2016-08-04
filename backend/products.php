<?php
    $team_id = isset($_GET["team_id"]) ? $_GET["team_id"] : "1";
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
    if (isset($_GET["category"])) {
        if ($_GET["category"] == "all") {
            $results = DB::query("SELECT id, name, category, price FROM products");
        } else {
            $results = DB::query("SELECT id, name, category, price FROM products WHERE category = %s", $_GET["category"]);
        }
    } else {
        $results = DB::query("SELECT id, name, category, price FROM products");
    }
    echo '<div class="row">';
    $i = -1;
    foreach ($results as $row) {
        if (++$i % 4 == 0) {
            echo '</div><div class="row">';
        }
        echo '<div class="product three columns" id="product' . $row["id"] . '">' . "\n";
            echo '<div class="product-image"></div>' . "\n";
            echo '<div class="product-details">' . "\n";
                echo '<div class="product-name">' . "\n";
                    echo $row["name"] . "\n";
                echo '</div>' . "\n";
                echo '<div class="product-price">' . "\n";
                    echo '&#8377;' . $row["price"] . " &middot; " . $row["category"] . "\n";
                echo '</div>' . "\n";
                echo '<div class="product-purchase">' . "\n";
                    echo '<input type="number" name="quantity" value="1" min="1" class="quantity-number"><button class="add-to-cart-button" onclick="addToCart(\'product' . $row["id"] . '\', this.parentNode.querySelector(\'.quantity-number\').value);">Add to Cart</button>' . "\n";
                echo '</div>' . "\n";
            echo '</div>' . "\n";
        echo '</div>' . "\n";
    }
    echo '</div>';
?>