myApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
        .when('/',
            {
                controller: 'LoginController',
                templateUrl: '/Bookmark/app/modules/login/login.html'
            })
        .when('/register',
            {
                //controller: 'CustomerOrdersController',
                templateUrl: '/Bookmark/app/modules/registeration/register.html'
            })
        .otherwise({ redirectTo: '/customers' });
    }
]);

requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: '/Bookmark/app/modules/',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        app: '../app'
    }
});