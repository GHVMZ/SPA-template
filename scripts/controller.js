app.controller('mainController', ['$scope', '$http', function($scope, $http, $rootScope){

    $scope.items = ["january", "february", "mars", "april", "may", "june", "july", "august", "october", "november", "december"];
    $scope.limit = 4;
    $scope.setLimit = function (lim) {
        $scope.limit = (lim <= 0) ? $scope.items.length : lim;
        $scope.limit = (lim <= 0) ? $scope.items.length : lim;
    };

    $scope.menu = [
        "home",
        "about",
        "contact"
    ];

    $scope.post = [
        {
            title: 'What happens when two worlds collide',
            background: 'https://static.pexels.com/photos/199470/pexels-photo-199470.jpeg',
            category: 'science',
            num: '531',
            date: '2016-03-14'
        },
        {
            title: 'The latest song from Kanye West',
            background: 'https://static.pexels.com/photos/196652/pexels-photo-196652.jpeg',
            category: 'music',
            num: '263',
            date: '2016-03-14'
        },
        {
            title: 'What is going on right now',
            background: 'https://static.pexels.com/photos/69096/pexels-photo-69096.jpeg',
            category: 'life',
            num: '321',
            date: '2016-03-14'
        },
        {
            title: 'Basket ball be ballin',
            background: 'https://static.pexels.com/photos/110180/pexels-photo-110180.jpeg',
            category: 'sport',
            num: '55',
            date: '2016-03-14'
        },
        {
            title: 'This is my first blog post, mom.',
            background: 'https://static.pexels.com/photos/34580/pexels-photo.jpg',
            category: 'programming',
            num: '930',
            date: '2016-03-21'
        }
    ];

}]);
