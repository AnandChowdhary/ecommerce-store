<?php
    if (isset($_COOKIE["cart"])) {
        setcookie("cart", "", time() + (86400 * 30), "/");
    }
    echo "Cart cleared";
?>
