<?php
    if (isset($_COOKIE["cart"])) {
        $cart = unserialize($_COOKIE["cart"]);
        $info = "";
        for ($i = 0; $i < sizeof($cart); $i++) {
            $info .= $cart[$i];
        }
        if ($info != "") {
            echo "<ul>";
            for ($i = 0; $i < sizeof($cart); $i++) {
                if ($i % 2 == 0) {
                    if ($cart[$i] != "") {
                        echo "<li>
                            " . $cart[$i] . "
                            <ul>
                                <li>
                                    Quantity: " . $cart[$i + 1] . "
                                </li>
                                <li>
                                    <span class='link' onclick='removeFromCart(\"" . $cart[$i] . "\")'>Remove</span>
                                </li>
                            </ul>
                        </li>";
                    }
                }
            }
            echo "</ul>";
        }
    }
?>
