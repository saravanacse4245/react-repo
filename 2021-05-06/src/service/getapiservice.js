import axios from "axios";

const CallumAPI = {
  posts: [],
  all: function() {
    return axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        this.posts = res.data;
        return this.posts;
      })
      .catch(res => {
        this.posts = res.data;
        return this.post;
      });
  }
};

// let payload = {
//     userId: 18,
//     id: 12,
//     title: "Post data inserted",
//     body: "pavan"
//   };
//   axios.post("https://jsonplaceholder.typicode.com/posts", payload)
//   .then(
//     RES => {
//       this.setState({ data: RES.data });
//       console.log(JSON.stringify(this.state.data));
//     },
//     ERR => {
//       {
//         JSON.stringify(RES.data);
//       }
//     }
//   )
//   .catch(
//       ERR =>{
//         console.log(ERR);
//       }
//   );

export default CallumAPI;
 