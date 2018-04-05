var axios = require('axios');
var yargs = require('yargs');

let argv = yargs
.options({
  a : {
  describe : 'Enter the Address',
  demand:true,
  alias:'address'
}
})
.help()
.alias('help','h')
.argv;

let address = encodeURIComponent(argv.a);
let geoUrl = `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyCnH3J6RwrO2JPg0HZHnO174u-xeT3UKDQ&address=${address}`;

axios.get(geoUrl).then((response)=>{
  if(response.data.status === 'ZERO_RESULTS'){
    console.log("Dfdf");
    throw new Error('Addres is not valid');
  }
    console.log(response.data.results[0].formatted_address);
      var lat = response.data.results[0].geometry.location.lat;
      var lng = response.data.results[0].geometry.location.lng;
      let weatherUrl = `https://api.darksky.net/forecast/160b3a27cfb484583f13f7c20791fe04/${lat},${lng}`;
      return axios.get(weatherUrl);

}).then((response)=>{
  temp = response.data.currently.temperature
  console.log(temp);
})
.catch((e)=>{
  if(e.code === 'ENOTFOUND'){
    console.log("Not able to connect to google api")
  }
  else {
    console.log(e.message);
  }
});
