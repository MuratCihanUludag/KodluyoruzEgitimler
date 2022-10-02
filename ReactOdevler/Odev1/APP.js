import axios from "axios";


const getData = async function getData(number){
    const {data: users} = await axios(`https://jsonplaceholder.typicode.com/users/${number}`)
    const {data: posts} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${number}`)
    return console.log(users, "postlar:",posts)

}
export default getData;
