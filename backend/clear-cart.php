<?php
    if (isset($_COOKIE["cart"])) {
        setcookie("cart", "", time() + (86400 * 30), "/");
    }
    if (isset($_COOKIE["quantities"])) {
        setcookie("quantities", "", time() + (86400 * 30), "/");
    }
    echo "Cart cleared";
?>
