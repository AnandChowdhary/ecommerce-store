# Ecommerce Store

A PHP + Bliss.js ecommerce store

## Usage
- Use `<div data-cart-productList="all"></div>` to fetch all products.
- Use `<div data-cart-productList="potato"></div>` to fetch products in the "potato" category.
- Use function `addToCart(product_id, quantity);` to add a product to cart.
- Use function `clearCart();` to clear the cart.
- Use function `refreshCart();` to refresh the AJAX the cart.
- Use `<div data-cart></div>` to display the cart.

## ⚠️ Archive Notice

In 2016, I tried implementing a basic e-commerce store (no checkout or payments). I don't think I completed this experimental project. But, in hindsight, the idea of using data attributes to dynamically load data is pretty cool.
