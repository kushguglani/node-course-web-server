var request = require('request');
var getLocation = (address)=>{
  return new Promise((resolve,reject)=>{
    request({
      url:`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyCnH3J6RwrO2JPg0HZHnO174u-xeT3UKDQ&address=${address}`,
      json:true
    },(error,response,body) =>{
      if(error){
        console.log(error);
        reject("Can not connect to google api");
      } else if(body.status === "REQUEST_DENIED"){
        reject('The provided API key is invalid.');
      }
       else if(body.status === 'ZERO_RESULTS'){
        reject("Addres is not valid");
      } else if(body.status === "OK"){
        resolve({
          address : body.results[0].formatted_address,
          lat : body.results[0].geometry.location.lat,
          lng : body.results[0].geometry.location.lng
        });
      }
    });
  })
};

module.exports = {
  getLocation
}
