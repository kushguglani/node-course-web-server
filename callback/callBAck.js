const request = require ('request');

var getUser = (id,callback)=>{
  let user = {
    id,
    name:'Kush'
  };
  callback(user);
};

getUser(31,user=>{
  console.log(user);
});
console.log("kush");


let getUser = (id,callback) =>{
  let user ={
    id,
    name:'name'
  };
  setTimeout(()=>{
    callback(user);
  },2000);
}

getUser(31,(userObject)=>{
  console.log(userObject);
});



this is

(userObject)=>{
  console.log(userObject);
})

call back which we send to getUser
in getUser call back is inside timeout
so its wait for 2 sec and then call back runs
as call back function only have console
so inside get user callback function run with user as a userObject

  callback(user);

  and print console with user as written in the callback

in hindi hamne get user ko call kiya
id and callback function ke sath
getUser function ne id ko user object me use kar liya and
then setTimeout run hua 2 sec k liye
jisme callback function h jo hamne argument m send kiya h
and usme ek console tha
ab woh callback function getUser me a gaya ha to
callback(user)  === (user)=>{
  console.log(user);
});
and woh user ko print kar dega
