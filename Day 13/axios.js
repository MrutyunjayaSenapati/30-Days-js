// Install a third-party module(e.g., axios) npm, import and 
const axios=require("axios")
const url="https://api.github.com/users/akshaymarch7";
async function fetchData(){
    try{
        const response=await axios.get(url);
        console.log(response.data);
    }
    catch(error){
        console.error(error);
    }
}
fetchData();