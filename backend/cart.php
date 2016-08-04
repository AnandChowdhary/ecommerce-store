<?php
    if (isset($_COOKIE["cart"])) {
        echo $_COOKIE["cart"];
        echo "~~~";
        if (isset($_COOKIE["quantities"])) {
            echo $_COOKIE["quantities"];
        }
    }
?>
