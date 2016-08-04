$(document)._.addEventListener("DOMContentLoaded", function() {
    $$("[data-cart-productList]").forEach(function(elt) {
        var request = new XMLHttpRequest();
        request.open("POST", "backend/products.php?category=" + elt.getAttribute("data-cart-productList"), true);
        request.send();
        request.onload = function() {
            elt.innerHTML = request.responseText;
        }
    });
    $(".clear-cart-button").addEventListener("click", function() {
        clearCart();
    });
    $(".refresh-cart-button").addEventListener("click", function() {
        refreshCart();
    });
    refreshCart();
});

var addToCart = function(product, quantity) {
    $("#" + product + " .add-to-cart-button").setAttribute("disabled", "disabled");
    $("#" + product + " .add-to-cart-button").innerHTML = "Adding...";
    var request = new XMLHttpRequest();
    request.open("POST", "backend/add-to-cart.php?product=" + product + "&quantity=" + quantity);
    request.send();
    request.onload = function() {
        refreshCart();
        notify(request.responseText);
        $("#" + product + " .add-to-cart-button").innerHTML = "Added";
    }
}

var notify = function(notification) {

}

var clearCart = function() {
    var request = new XMLHttpRequest();
    request.open("POST", "backend/clear-cart.php", true);
    request.send();
    request.onload = function() {
        refreshCart();
    }
    refreshCart();
}

var refreshCart = function() {
    $$("[data-cart]").forEach(function(elt) {
        var request = new XMLHttpRequest();
        request.open("POST", "backend/cart.php", true);
        request.send();
        request.onload = function() {
            if (request.responseText != "") {
                $(".cart-manage").style.display = "";
                var initialResponse = request.responseText.split("~~~");
                var products = initialResponse[0].split("|-|");
                var quantities = initialResponse[1].split("|-|");
                var finalResult = "<ul>";
                for (i = 0; i < products.length - 1; i++) {
                    finalResult += "<li><strong>" + products[i] + "</strong>" +
                        "<ul>" +
                            "<li>Quantity: " + quantities[i] + "</li>" +
                        "</ul>" +
                    "</li>";
                }
                finalResult += "</ul>";
                elt.innerHTML = finalResult;
            } else {
                $(".cart-manage").style.display = "none";
                elt.innerHTML = "<ul><li>No products</li></ul>";
            }
        }
    });
};
