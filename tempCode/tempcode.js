const request = require('request');

let getTemperature = (lat,lng,callback)=>{
  request({
    url:`https://api.darksky.net/forecast/160b3a27cfb484583f13f7c20791fe04/${lat},${lng}`,
    json:true
  },(error,response,body)=>{
    if(error){
      callback("Not able to connect with forecast");
    }
    else if(body.code === 400){
      callback(body.error);
    }
    else if(body.currently){
      callback(undefined,{
        temperature : body.currently.temperature,
        humidity : body.currently.humidity,
        summary : body.currently.summary
      })
    }
    // or
    // if((!error && response.statusCode ===200)){
    //   console.log(body.currently.temperature)
    // }
    // else{
    //   console.log("unable to fetch weather");
    // }
  })
}

module.exports = {
  getTemperature
}
