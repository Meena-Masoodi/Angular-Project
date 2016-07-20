var app=angular.module('newApp',['ngRoute']);

app.config(function($routeProvider){
    
     $routeProvider.when('/',{
       templateUrl: 'page/home.html',
        controller:'homeController'
    })
      .when('/services',{
       templateUrl: 'page/service.html',
        controller:'serviceController'
    })
       .when('/about',{
       templateUrl: 'page/about.html',
        controller:'aboutController'
    })
     .when('/faq',{
       templateUrl: 'page/faq.html',
        controller:'faqController'
    })
     .when('/table',{
       templateUrl: 'page/table.html',
        controller:'tableController'
    })
     .when('/blogHome',{
       templateUrl: 'page/blogHome.html',
        controller:'blogController'
    })
    .when('/onePost',{
       templateUrl: 'page/onePost.html',
        controller:'postController'
    })
    
      .otherwise({ redirectTo: '/' });
                        
});
app.controller('homeController',function($scope){

    });
app.controller('serviceController',function($scope){

    });

app.controller('aboutController',function($scope){

    });
app.controller('faqController',function($scope){

    });
app.controller('tableController',function($scope){

    });
app.controller('blogController',function($scope){

    });
app.controller('postController',function($scope){

    });