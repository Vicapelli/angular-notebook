angular.module("contacts").directive("awContact", function () {
    return {
        restrict: "A",
        scope: {
            contact: '=awContact',
            fnFechar: '&'
        },
        templateUrl: "views/contact.template.html",
        link: function (scope, element, attr) {

            if (!attr.fnFechar) {
                element.find('button').remove();
            }
        }
    };
})