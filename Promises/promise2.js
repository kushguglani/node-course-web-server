var request = require('request');
var geoCode= require('./geoCode');

geoCode.getLocation('560066').then((body)=>{
  console.log(body);
},(errorMessage)=>{
  console.log(errorMessage);
});
