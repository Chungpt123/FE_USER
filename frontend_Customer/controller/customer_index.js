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
            templateUrl: "/layout/product-index.html",
            controller: "product_controller"
        })
        .when("/product/:id", {
            templateUrl: "/layout/product-detail.html",
            controller:"detail_controller"          
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
            templateUrl: "/layout/login.html",
            controller:"login_controller"
        })
        .when("/faq", {
            templateUrl: "faq.html"
        })


});
function myController($scope, $rootScope) {

}
app.controller("my_controller", myController)

