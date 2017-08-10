// Using the "two-argument" call to module defines a module.

// The second argument allows you to supply a list of other modules that you
// "inject" into this module.

// Not going to bother with this for now.

angular.module("myApp", []);

angular.module("myApp").controller("myController", function() {
    alert("Welcome, Norm")
});

// This is a custom directive that I've defined, not something built into
// angular. I can stitch the div into my code by putting <my-directive>

angular.module("myApp").
    directive("myDirective",function () {
        return {
            template: "<div>This is a custom directive</div>"
        }
    }
);
