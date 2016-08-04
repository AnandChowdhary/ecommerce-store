<?php
    $quantity = $_GET["quantity"];
    $product = $_GET["product"];
    if(!isset($_COOKIE["cart"])) {
        setcookie("cart", $product . "|-|", time() + (86400 * 30), "/");
        echo "Product added to cart";
    } else {
        setcookie("cart", $_COOKIE["cart"] . $product . "|-|", time() + (86400 * 30), "/");
        echo "Product added to cart";
    }
    if(!isset($_COOKIE["quantities"])) {
        setcookie("quantities", $quantity . "|-|", time() + (86400 * 30), "/");
    } else {
        setcookie("quantities", $_COOKIE["quantities"] . $quantity . "|-|", time() + (86400 * 30), "/");
    }
?>
