//
// let asyncAdd = (a,b)=>{
//   return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//       if(typeof a === 'number' && typeof b === 'number'){
//         resolve(a+b);
//       }
//       else{
//         reject("Must be a number")
//       }
//     },2000);
//   });
// };
//
// asyncAdd(3,4).then((res) =>{
//   console.log(res);
// },(errorMessage)=>{
//   console.log(errorMessage);
// })

// scope Chain

let asyncAdd = (a,b)=>{
  return new Promise((resolve,reject)=>{
      setTimeout(()=>{
      if(typeof a === 'number' && typeof b === 'number'){
        resolve(a+b);
      }
      else{
        reject("Must be a number")
      }
    },2000);
  });
};

asyncAdd(3,4).then((res) =>{
  console.log(res);
  return asyncAdd(res,3);
},(errorMessage)=>{
  console.log(errorMessage);
}).then((res)=>{
  console.log("is Answer is 10 :",res)
},(errorMessage)=>{
  console.log(errorMessage)
})
