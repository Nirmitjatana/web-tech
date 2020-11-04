const URL = "https://covid19.mathdro.id/api";
const URL1 = "https://api.covid19api.com/summary";
const URL2 = "https://api.covidindiatracker.com/state_data.json";
const URL3 = "https://api.rootnet.in/covid19-in/contacts";
let app = angular.module("MyApp",[]);
let app1 = angular.module("MyApp1",[]);
let app2 = angular.module("MyApp2",[]);
// app.controller('MyCtrl',($scope , $http)=>{
//     // this is controller
//     // $scope.title="Stay home stay safe";
// $http.get(URL).then((response)=>{
//     // console.log(response);
//     $scope.all_data = response.data;
// } ,(error) =>{

// } )

// });
app.controller('MyCtrl',($scope , $http)=>{
    $scope.countries = [];
$http.get(URL1).then((response)=>{
    console.log(response);
    $scope.countries = response.data.Countries;
    $scope.all_data = response.data;
} ,(error) =>{

} )

});
app1.controller('MyCtrl1',($scope , $http)=>{
    // $scope.state = [];
$http.get(URL2).then((response)=>{
    console.log(response);
    $scope.states = response.data;
    // $scope.all_data = response.data;
} ,(error) =>{

} )

});

app2.controller('MyCtrl2',($scope , $http)=>{
    // $scope.state = [];
$http.get(URL3).then((response)=>{
    console.log(response.data.data.contacts.regional);
    $scope.states = response.data.data.contacts.regional;
    // $scope.all_data = response.data;
} ,(error) =>{

} )

});
