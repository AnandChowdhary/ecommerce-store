<?php
    $product = $_GET["product"];
    if(isset($_COOKIE["cart"])) {
        $cart = unserialize($_COOKIE["cart"]);
        $valElt = 0;
        for ($i = 0; $i < sizeof($cart); $i++) {
            if ($cart[$i] == $product) {
                $valElt = $i;
            }
        }
        $cart[$valElt] = "";
        $cart[$valElt + 1] = "";
        setcookie("cart", serialize($cart), time() + (86400 * 30), "/");
    }
?>
