// // Understanding promises
// //1. Create a promise that resolves with a message after a 2 second timeout and log the message to the console
// const p1=new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve("p1 Success"),8000);
// });
// p1
//     .then((data)=>{
//         console.log(data);
//     })

// // 2.Create a promise that reject with an error message after a 2 second timeout and handle the error using .catch().
// const p2=new Promise((_,reject)=>{
//     setTimeout(()=>reject("p2 Reject"),2000);
// });
// p2.catch((msg)=>{
//     console.log(msg);
// })
// // 3. Chaining Promises
// // Create a sequenct of Promise that simulate fetching data from a server chain the promises to log messages in a specific order.
// const Promise1=new Promise((resolve)=>{
//     setTimeout(()=>resolve("Promise Success"),2000);
// });
// Promise1.then(function(result1){
//     console.log(result1);
//     return new Promise((resolve)=>{
//         setTimeout(()=>resolve("Promise Success 1"),3000);
    
//     });
// })
//     .then((result2)=>{
//         console.log(result2);
//     });
    
//     // 
//     // 
//     function fetchData(message, delay) {
//         return new Promise((resolve) => {
//           setTimeout(() => {
//             console.log(message);
//             resolve(message);
//           }, delay);
//         });
//       }
      
      
//       fetchData("Fetching data from Server 1...", 1000)
//         .then(() => fetchData("Data from Server 1 received", 1000))
//         .then(() => fetchData("Fetching data from Server 2...", 2000))
//         .then(() => fetchData("Data from Server 2 received", 1000))
//         .then(() => fetchData("Fetching data from Server 3...", 3000))
//         .then(() => fetchData("Data from Server 3 received", 1000))
//         .then(() => {
//           console.log("All data has been fetched successfully!");
//         });
      
//         // Using Async/Await
//         // Write an async function that waits for a promise to resolve and the logs the resolved value
        // const p=new Promise((resolve,reject)=>{
        //     setTimeout(()=>{
        //         resolve("Promise Resolved Value");
        //     },2000);
        // });
        // async function handlePromise(){
        //     const val=await p;
        //     console.log("Namaste Js");
        //     console.log(val);
        // }
        // handlePromise();
// Write an async function that handles a rejected promise using try-catch and logs the error message.
// const prom=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("Promise denied");
//     },3000);
// });
// async function promHandle(){
//     try{
//     const val1=await prom;
//     console.log("Namaste javaScript");
//     }
//     catch(error){
//     console.error(error);
//     }
// }
// promHandle();
// Use the fetch API to get data from a public API and log the respose data to the console using promise.
// const  fetchPromise=fetch("https://api.github.com/users/MrutyunjayaSenapati");
// fetchPromise.then((response)=>{
//     if(!response.ok){
//         throw new Error("Network was not OK");
//     }
//     return response.json();
// }).then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.error("There was a problem with the fetch operation",error);
// })
//Use the fetch API to get data from a public API and log the response data to the console using async/await.

// const gitApi= fetch("https://api.github.com/users/akshaymarch7");
// async function handlePromise(){
//     try{
//         const data=await gitApi;
//         const jsonValue=await data.json();
//         console.log(jsonValue);
//     }
//     catch(err){
//         console.log(err);
//     }
// }
// handlePromise();

// Concurrent Promises
// Use promise.all to wait for multiple promises to resolve and then log all their values.
const prom1=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("Prom1 Success"),1000)
});
const prom2=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("Prom2 Success"),2000)
});
const prom3=new Promise((resolve,reject)=>{
    // setTimeout(()=>resolve("Prom3 Success"),3000)
    setTimeout(()=>reject("Prom3 Reject"),3000)
});
Promise.all([prom1,prom2,prom3])
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.error(err);
})
// Use Promise.race to log the value of the first promise that resolve among multiple promise.
const pro1=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("Prom1 Success"),1000)
});
const pro2=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("Prom2 Success"),2000)
});
const pro3=new Promise((resolve,reject)=>{
    // setTimeout(()=>resolve("Prom3 Success"),3000)
    setTimeout(()=>reject("Prom3 Reject"),3000)
});
Promise.race([pro1,pro2,pro3])
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.error(err);
})