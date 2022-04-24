import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Posts from "./components/Posts";
import Profil from "./components/Profil";

function App() {
  const [user, setuser] = useState({});
  const [posts, setposts] = useState([]);
  useEffect(() => {
    let result = axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setuser(res.data[0]))
      .catch((err) => console.log(err));
    let result2 = axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((res) => setposts(res.data.slice(0, 100)))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Profil user={user} />
      <Posts posts={posts} />
    </div>
  );
}

export default App;
