var app = angular.module('myApp', []);
app.filter('evenage', function()
{
    return function(text) {
        let txt = '';
            text = text || '';
            if(text%2==0){
                txt = text+" ✅"
            }
            else{
                txt = text+" ❌"
            }
            return txt;
        }
        
    });

app.filter('genderdetect', function()
{
    return function(text) {
        let txt = '';
            text = text || '';
            if(text=='M'){
                txt = text+" 🙋🏻‍♂️"
            }
            else{
                txt = text+" 🙋🏻‍♀️"
            }
            return txt;
        }
        
    });
app.controller('namesCtrl', function($scope) {
    $scope.datum = [
        {id:902121,name:"Darpan",location:"Guwahati",age:26,gender:"M",interest:"CompetitiveProgramming"},
        {id:902122,name:"Debanjan",location:"Kolkata",age:25,gender:"M",interest:"Iot"},
        {id:902123,name:"Rajarshi",location:"Siliguri",age:19,gender:"M",interest:"WebDevelopment"},
        {id:902124,name:"Ayushya",location:"Chennai",age:24,gender:"F",interest:"WebDesign"},
        {id:902125,name:"Jagriti",location:"Kanpur",age:23,gender:"F",interest:"DatabaseManagement"},
        {id:902126,name:"Debanjana",location:"Jamshedpur",age:22,gender:"F",interest:"DataScience"},
        {id:902127,name:"Hemant",location:"Amritsar",age:19,gender:"M",interest:"WebDevelopment"},
        {id:902128,name:"Alin",location:"Bengaluru",age:21,gender:"M",interest:"AI/ML"},
        {id:902129,name:"Dishanth",location:"Bengaluru",age:35,gender:"M",interest:"DataScience"},
        {id:902130,name:"Manjeet",location:"Guwahati",age:22,gender:"M",interest:"CompetitiveProgramming"},
        {id:902131,name:"Supriya",location:"Delhi",age:26,gender:"F",interest:"Cryptography"}
    ];
});
