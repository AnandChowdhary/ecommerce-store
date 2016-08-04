$(document)._.addEventListener("DOMContentLoaded", function() {
    $$("[data-cart-products]").forEach(function(elt) {
        var request = new XMLHttpRequest();
        request.open("POST", "backend/products.php?category=" + elt.getAttribute("data-cart-products"), true);
        request.send();
        request.onload = function() {
            elt.innerHTML = request.responseText;
        }
    });
    $$("[data-cart-categories]").forEach(function(elt) {
        var request = new XMLHttpRequest();
        request.open("POST", "backend/categories.php", true);
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
    $$(".cart-toggle")._.addEventListener("click", function() {
        $(".product-cart").classList.toggle("hidden");
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

var removeFromCart = function(product) {
    var request = new XMLHttpRequest();
    request.open("POST", "backend/remove-from-cart.php?product=" + product);
    request.send();
    request.onload = function() {
        refreshCart();
        notify(request.responseText);
        $$("[data-productid='" + product + "']")._.removeAttribute("disabled");
    }
}

var notify = function(notification) {
    $(".notification").innerHTML = notification;
    $(".notification").style.display = "block";
    setTimeout(function() {
        $(".notification").style.display = "none";
    }, 1000);
}

var clearCart = function() {
    var request = new XMLHttpRequest();
    request.open("POST", "backend/clear-cart.php", true);
    request.send();
    request.onload = function() {
        refreshCart();
        $$(".add-to-cart-button")._.removeAttribute("disabled");
        refreshCart();
        notify("Cart Cleared");
    }
}

var loadProducts = function(category) {
    $("[data-cart-products]").innerHTML = '<img class="loading-image" src="img/loading.gif">';
    var request = new XMLHttpRequest();
    request.open("POST", "backend/products.php?category=" + category, true);
    request.send();
    request.onload = function() {
        $("[data-cart-products]").innerHTML = request.responseText;
        $("[data-cart-category]").innerHTML = category == "all" ? "All Products" : category;
    }
    $$(".header-category-link")._.classList.remove("active");
}

var refreshCart = function() {
    $$("[data-cart]").forEach(function(elt) {
        elt.innerHTML = '<img class="loading-image" src="img/loading.gif">';
        var request = new XMLHttpRequest();
        request.open("POST", "backend/cart.php", true);
        request.send();
        request.onload = function() {
            if (request.responseText != "") {
                $(".cart-manage").classList.remove("disabled");
                var initialResponse = request.responseText.split("~~~");
                var products = initialResponse[0].split("|-|");
                var quantities = initialResponse[1].split("|-|");
                var finalResult = "<ul>";
                for (i = 0; i < products.length - 1; i++) {
                    finalResult += "<li><strong>" + products[i] + "</strong>" +
                        "<ul>" +
                            "<li>Quantity: " + quantities[i] + "</li>" +
                            "<li><span class=\"link\" onclick=\"removeFromCart('" + products[i] + "')\">Remove</span></li>" +
                        "</ul>" +
                    "</li>";
                }
                finalResult += "</ul>";
                elt.innerHTML = finalResult;
            } else {
                $(".cart-manage").classList.add("disabled");
                elt.innerHTML = "<img src='img/cart-empty.png' class='cart-empty-state'>";
            }
        }
    });
};
