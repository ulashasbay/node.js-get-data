import axios from "axios";

export default async function getData(number){
    const { data: userData }= await axios(`https://jsonplaceholder.typicode.com/users/${number}`);
    const { data: postData }= await axios(`https://jsonplaceholder.typicode.com/posts?userId=${number}`);

    console.log("User: ", userData);
    console.log("Post: ", postData[number-1]);
}
