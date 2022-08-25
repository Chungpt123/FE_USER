const app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "/layout/index-2.html"

        })
        .when("/index", {
            templateUrl: "/layout/index-2.html"
        })
        .when("/category", {
            templateUrl: "/layout/category-4cols.html"
        })
        .when("/product", {
            templateUrl: "/layout/product.html"
        })
        .when("/cart", {
            templateUrl: "/layout/cart.html"
        })
        .when("/checkout", {
            templateUrl: "/layout/checkout.html"
        })
        .when("/about", {
            templateUrl: "/layout/about.html"
        })
        .when("/contact", {
            templateUrl: "/layout/contact.html"
        })
        .when("/blog", {
            templateUrl: "/layout/blog.html"
        })
        .when("/login", {
            templateUrl: "/layout/login.html"
        })
        .when("/faq", {
            templateUrl: "/layout/faq.html"
        })
        

});