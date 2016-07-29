angular.module('ionicApp', ['ionic', 'ionic-audio'])

.controller('MyCtrl', function($scope) {
 
  $scope.tracks = [
        {
            url: 'https://ionic-audio.s3.amazonaws.com/Message%20in%20a%20bottle.mp3',
            artist: 'The Police',
            title: 'Message in a bottle',
            art: 'https://ionic-audio.s3.amazonaws.com/The_Police_Greatest_Hits.jpg'
        },
        {
            url: 'https://ionic-audio.s3.amazonaws.com/Roxane.mp3',
            artist: 'The Police',
            title: 'Roxane',
            art: 'https://ionic-audio.s3.amazonaws.com/The_Police_Greatest_Hits.jpg'
        }
    ];
});