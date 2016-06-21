'use strict';

/**
 * @ngdoc function
 * @name angularProjectsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularProjectsApp
 */
angular.module('angularProjectsApp')
  .controller('SavedCtrl', function ($scope, $http) {

    $scope.loggedIn = false; 

    $scope.removeItem = function(index){
      $scope.photos.splice(index,1);
    }

    $scope.photos = [
      {
        src:"http://7.media.bustedtees.cvcdn.com/b/-/bustedtees.2094c5bb-0679-46a1-8ad6-63ef59fb.gif",
        link:"http://lorempixel.com/300/400/",
        title:"Fun!"
      },
      {
        src:"http://1.media.bustedtees.cvcdn.com/8/-/bustedtees.cc59f3d8-9b81-4371-a7c9-e5f1119b.gif",
        link:"http://lorempixel.com/300/400/",
        title:"Beach!"
      },
      {
        src:"http://6.media.bustedtees.cvcdn.com/7/-/bustedtees.cb34c4a7-4d07-4509-88c3-f5ad69ca.gif",
        link:"http://lorempixel.com/300/400/",
        title:"Running!"
      },
      {
        src:"http://1.media.bustedtees.cvcdn.com/b/-/bustedtees.05c091eb-c362-41e6-905a-12f19fb9.gif",
        link:"http://lorempixel.com/300/400/",
        title:"Ouch!"
      },
      {
        src:"http://8.media.bustedtees.cvcdn.com/3/-/bustedtees.f0fb7f83-b9ad-4ed3-a1b9-39871068.gif",
        link:"http://lorempixel.com/300/400/",
        title:"Orange!"
      },
      {
        src:"http://5.media.bustedtees.cvcdn.com/b/-/bustedtees.76ef23db-2ebe-47fe-a980-ca94b3d7.gif",
        link:"http://lorempixel.com/300/400/",
        title:"Fun!"
      },
      {
        src:"http://2.media.bustedtees.cvcdn.com/3/-/bustedtees.ff158bb3-141b-4ffa-b00c-8d2d3cd2.gif",
        link:"http://lorempixel.com/300/400/",
        title:"Beach!"
      },
      {
        src:"http://4.media.bustedtees.cvcdn.com/7/-/bustedtees.e1ebdaf7-3199-419f-8149-0438dcdc.gif",
        link:"http://lorempixel.com/70/200/",
        title:"Running!"
      },
      {
        src:"http://5.media.bustedtees.cvcdn.com/f/-/bustedtees.2e0c3def-2a17-41ec-ae57-771b0208.gif",
        link:"http://lorempixel.com/300/400/",
        title:"Ouch!"
      },
      {
        src:"http://6.media.bustedtees.cvcdn.com/f/-/bustedtees.6460cebf-2860-4ed4-a269-73c0bc3f.gif",
        link:"http://lorempixel.com/300/400/",
        title:"Orange!"
      },
      {
        src:"http://4.media.bustedtees.cvcdn.com/d/-/bustedtees.cb5872fd-0412-45f7-a2e2-9d72880f.gif",
        link:"http://lorempixel.com/300/400/",
        title:"Fun!"
      },
      {
        src:"http://4.media.bustedtees.cvcdn.com/7/-/bustedtees.0ca5c277-8c28-415e-b716-e4c1605f.gif",
        link:"http://lorempixel.com/300/400/",
        title:"Beach!"
      },
      {
        src:"http://8.media.bustedtees.cvcdn.com/b/-/bustedtees.888c6b9b-e574-442d-beed-6221a6d6.gif",
        link:"http://lorempixel.com/400/400/",
        title:"Running!"
      },
      {
        src:"http://6.media.bustedtees.cvcdn.com/7/-/bustedtees.098bb8e7-da1c-45c1-9e56-6eaa9ee6.gif",
        link:"http://lorempixel.com/300/400/",
        title:"Ouch!"
      },
      {
        src:"http://0.media.bustedtees.cvcdn.com/9/-/bustedtees.a684f9d9-241a-46bb-8963-5da02709.gif",
        link:"http://lorempixel.com/300/400/",
        title:"Orange!"
      }
    ]
  });
