const geoCode = require('./geocode/geoCode');
const tempCode = require('./tempCode/tempCode');

//http request for address

const yargs = require('yargs');

let args = yargs
.options({
  a:{
    describe:'Addres for the weather',
    string:'true',
    alias:'address',
    demand:true
  }
})
.help()
.alias('help','h')
.argv;

// console.log(args.a);
geoCode.geoCodeAddress(args.a,(errorMessage,results)=>{
  if(errorMessage){
    console.log(errorMessage);
  }
  else{
    console.log(JSON.stringify(results,undefined,2));
    tempCode.getTemperature(results.lat,results.lng,(error,result)=>{
        if(error){
          console.log(error);
        }
        else {
          console.log(JSON.stringify(result,undefined,2));
        }
    });
  }
});
