<?php
    $product = $_GET["product"];
    if(isset($_COOKIE["cart"])) {
        $text = explode($product, $_COOKIE["cart"]);
        setcookie("cart", str_replace($product . "|-|", "", $_COOKIE["cart"]), time() + (86400 * 30), "/");
    }
?>
