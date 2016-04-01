'use strict';

/**
 * @ngdoc function
 * @name openshiftNgApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the openshiftNgApp
 */
angular.module('openshiftNgApp')
  .controller('TwoWayBind', function($scope,$http,$interval)
{
  load_pictures();
  $interval(function()
  {
    load_pictures();
  },30000);

  function load_pictures() {

    $http.get('http://localhost:3000/load').success(function (data) {
      $scope.profile_pictures = data;
    });
  }

/*    $.ajax({
      url:"http://localhost:3000/load",
      dataType: 'jsonp',
      success: function(data){
        $scope.profile_pictures = data.json;
      }
    })
  };*/

/*    $.ajaxPrefilter( function (options) {
      if (options.crossDomain && jQuery.support.cors) {
        var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
        options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
        //options.url = "http://cors.corsproxy.io/url=" + options.url;
      }
    });

    $.get(
      'http://en.wikipedia.org/wiki/Cross-origin_resource_sharing',
      function (response) {
        console.log("> ", response);
        $("#viewer").html(response);
      });
    */
    
});
