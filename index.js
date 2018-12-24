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
                data.push(item[6]);
                option.series[0].data=data;//给Y轴
                time.push(new Date(item[0]).toLocaleTimeString());
                option.xAxis.data=time;//给X轴 插入时间数据
            });
               

              }, function errorCallback(response) {
                  // 请求失败执行代码
          });
        }, 2000);

        //   setInterval(function () {
        //     var tem = 20 + Math.random().toFixed(2) * 10;
        //     tem = tem.toFixed(2); // 随机数模拟温度，只保留两位小数
        //     var time = new Date();
        //     option.xAxis.data.push(time.getMinutes()+':'+time.getSeconds());//给X轴 插入时间数据
        //     option.series[0].data.push(tem);//给Y轴 插入温度数据
      
        //     // 如果数据超过30个，把第一个数据删除。
        //     if(option.xAxis.data.length > 30){
        //       option.xAxis.data.shift()
        //       option.series[0].data.shift()
        //     }
        //     myChart.setOption(option);
        //   }, 1000);
      });
