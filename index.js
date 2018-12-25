      var app = angular.module('myApp', []);
	
      app.controller('siteCtrl', function($scope, $http) {
        setInterval(function () {
        $scope.list=[];
          $http({
              method: 'GET',
              url: 'http://127.0.0.1:2019/'
          }).then(function successCallback(response) {
            $scope.list= response.data.results[0].series[0].values;
            console.log($scope.list)
            var data=[];
            var time=[];
            $scope.list.forEach(item => {
                data.push(item[1]);
                option.series[0].data=data;//给Y轴
                time.push(new Date(item[0]).toLocaleTimeString());
                option.xAxis.data=time;//给X轴 插入时间数据
            });
              }, function errorCallback(response) {
                  // 请求失败执行代码
          });
          myChart.setOption(option);
        }, 10000);
      });
