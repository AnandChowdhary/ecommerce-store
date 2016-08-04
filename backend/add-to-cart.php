<?php
    $quantity = $_GET["quantity"];
    $product = $_GET["product"];
    if(isset($_COOKIE["cart"])) {
        $cart = unserialize($_COOKIE["cart"]);
    } else {
        $cart = array();
    }
    array_push($cart, $product, $quantity);
    setcookie("cart", serialize($cart), time() + (86400 * 30), "/");
    echo "Product added to cart.";
?>
