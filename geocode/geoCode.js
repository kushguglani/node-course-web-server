var request = require('request');
var geoCodeAddress = (appendUrl,callback) =>{

   appendUrl = encodeURIComponent(appendUrl);
   request({
    url:`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyCnH3J6RwrO2JPg0HZHnO174u-xeT3UKDQ&address=${appendUrl}`,
    json:true
  },(error,response,body)=>{
    let data = JSON.stringify(body);
    // console.log(JSON.stringify(body,undefined,2));
    if(error){
      callback("unable to coonect Check your url or network"+error);
    }
    else if(body.status === "ZERO_RESULTS"){
      callback("invalid address");
    }
    else if(body.status === "OK"){
      callback(undefined, {
        address : body.results[0].formatted_address,
        lat : body.results[0].geometry.location.lat,
        lng : body.results[0].geometry.location.lng
      });
    }
  });
}

module.exports = {
  geoCodeAddress
}
